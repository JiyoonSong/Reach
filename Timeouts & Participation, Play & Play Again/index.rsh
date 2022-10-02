'reach 0.1'

const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (handAlice, handBob) =>
    ((handAlice + (4 - handBob)) % 3);

assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handAlice =>
    forall(UInt, handBob =>
        assert(isOutcome(winner(handAlice,handBob)))));

forall(UInt, (hand) =>
    assert(winner(hand, hand) == DRAW));

const Player ={
    ...hasRandom,
    getHand: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([],Null),
}

export const main = Reach.App(()=>{
    const Alice = Participant('Alice',{
        //specify Alice's interact interface here
        ...Player,
        wager: UInt,
        deadline: UInt,
    })
    const Bob = Participant('Bob',{
        //specify Bob's interact interface here
        ...Player,
        acceptWager: Fun([UInt],Null),
    })
    init()

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        });
    };
    // write program here
    Alice.only(() =>{
        const amount = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    })
    Alice.publish(amount, deadline)
        .pay(amount)
    commit()

    // local step
    Bob.only(() =>{
        interact.acceptWager(amount);
    });

    //consensus step
    Bob.pay(amount)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    //must be in consensus
    var outcome = DRAW;
    invariant(balance() == 2 * amount && isOutcome(outcome))
    while(outcome == DRAW){
        //body of loop
        commit();

        Alice.only(() => {
            const _handAlice = interact.getHand();
            const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
            const commitAlice = declassify(_commitAlice);
        });
        Alice.publish(commitAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();

        unknowable(Bob, Alice(_handAlice, _saltAlice));
        Bob.only(() => {
            const handBob = declassify(interact.getHand());
        });
        Bob.publish(handBob)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            const saltAlice = declassify(_saltAlice);
            const handAlice = declassify(_handAlice);
        });

        Alice.publish(saltAlice, handAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob,informTimeout));

        checkCommitment(commitAlice, saltAlice, handAlice);

        outcome = winner(handAlice, handBob);
        continue;
    }
    
    assert(outcome == A_WINS || outcome == B_WINS);
    transfer(2 * amount).to(outcome == A_WINS ? Alice : Bob);
    commit()

    each([Alice, Bob], () =>{
        interact.seeOutcome(outcome)
    });
})