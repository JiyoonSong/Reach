// Automatically generated with Reach 0.1.12 (af6530ae)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (af6530ae)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v348 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v349 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v349, v348],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:67:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v349, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v353, v354], secs: v356, time: v355, didSend: v76, from: v352 } = txn1;
      
      sim_r.txns.push({
        amt: v353,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v365 = stdlib.safeAdd(v355, v354);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v353, v354], secs: v356, time: v355, didSend: v76, from: v352 } = txn1;
  ;
  const v365 = stdlib.safeAdd(v355, v354);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v365],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v352, v353, v354, v365],
      evt_cnt: 0,
      funcNum: 2,
      lct: v355,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v532, time: v531, didSend: v291, from: v530 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v352,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v532, time: v531, didSend: v291, from: v530 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:59:35:application',
      fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:74:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v370, time: v369, didSend: v86, from: v368 } = txn2;
    const v372 = stdlib.add(v353, v353);
    ;
    let v373 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v374 = v369;
    let v381 = v372;
    
    let txn3 = txn2;
    while (await (async () => {
      const v389 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v389;})()) {
      const v396 = stdlib.safeAdd(v374, v354);
      const v400 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:82:48:application',
        fs: ['at ./index.rsh:81:19:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v401 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:83:46:application',
        fs: ['at ./index.rsh:81:19:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v402 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:85:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:81:19:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v403 = stdlib.digest([ctc0, ctc0], [v402, v400]);
      const v405 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:87:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:81:19:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v406 = stdlib.digest([ctc0, ctc0], [v405, v401]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v352, v353, v354, v368, v381, v396, v403, v406],
        evt_cnt: 2,
        funcNum: 4,
        lct: v374,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:90:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v409, v410], secs: v412, time: v411, didSend: v118, from: v408 } = txn4;
          
          ;
          const v420 = stdlib.safeAdd(v411, v354);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v396],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v352, v353, v354, v368, v381, v396],
          evt_cnt: 0,
          funcNum: 5,
          lct: v374,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v498, time: v497, didSend: v242, from: v496 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v368,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v498, time: v497, didSend: v242, from: v496 } = txn5;
        ;
        const v499 = stdlib.addressEq(v352, v496);
        const v500 = stdlib.addressEq(v368, v496);
        const v501 = v499 ? true : v500;
        stdlib.assert(v501, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:59:35:application',
          fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v409, v410], secs: v412, time: v411, didSend: v118, from: v408 } = txn4;
        ;
        const v413 = stdlib.addressEq(v352, v408);
        stdlib.assert(v413, {
          at: './index.rsh:90:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v420 = stdlib.safeAdd(v411, v354);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v420],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v352, v353, v354, v368, v381, v409, v410, v420],
            evt_cnt: 0,
            funcNum: 7,
            lct: v411,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v480, time: v479, didSend: v208, from: v478 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v480, time: v479, didSend: v208, from: v478 } = txn6;
          ;
          const v481 = stdlib.addressEq(v352, v478);
          const v482 = stdlib.addressEq(v368, v478);
          const v483 = v481 ? true : v482;
          stdlib.assert(v483, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:59:35:application',
            fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v427, v428], secs: v430, time: v429, didSend: v130, from: v426 } = txn5;
          ;
          const v431 = stdlib.addressEq(v368, v426);
          stdlib.assert(v431, {
            at: './index.rsh:103:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v438 = stdlib.safeAdd(v429, v354);
          const txn6 = await (ctc.sendrecv({
            args: [v352, v353, v354, v368, v381, v409, v410, v427, v428, v438, v402, v400, v401, v405],
            evt_cnt: 4,
            funcNum: 8,
            lct: v429,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:112:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v443, v444, v445, v446], secs: v448, time: v447, didSend: v142, from: v442 } = txn6;
              
              ;
              let v454;
              const v455 = stdlib.eq(v445, v428);
              if (v455) {
                v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v456 = stdlib.safeAdd(v444, v427);
                const v457 = stdlib.eq(v445, v456);
                if (v457) {
                  v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  const v459 = stdlib.eq(v428, v456);
                  if (v459) {
                    v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  else {
                    v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv373 = v454;
              const cv374 = v447;
              const cv381 = v381;
              
              await (async () => {
                const v373 = cv373;
                const v374 = cv374;
                const v381 = cv381;
                
                if (await (async () => {
                  const v389 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v389;})()) {
                  const v396 = stdlib.safeAdd(v374, v354);
                  sim_r.isHalt = false;
                  }
                else {
                  const v514 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v517 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:14:decimal', stdlib.UInt_max, '2'), v353);
                  const v519 = v514 ? v352 : v368;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v519,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v438],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v352, v353, v354, v368, v381, v409, v410, v427, v428, v438],
              evt_cnt: 0,
              funcNum: 9,
              lct: v429,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v462, time: v461, didSend: v174, from: v460 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v368,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v462, time: v461, didSend: v174, from: v460 } = txn7;
            ;
            const v463 = stdlib.addressEq(v352, v460);
            const v464 = stdlib.addressEq(v368, v460);
            const v465 = v463 ? true : v464;
            stdlib.assert(v465, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:113:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:59:35:application',
              fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:113:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v443, v444, v445, v446], secs: v448, time: v447, didSend: v142, from: v442 } = txn6;
            ;
            const v449 = stdlib.addressEq(v352, v442);
            stdlib.assert(v449, {
              at: './index.rsh:112:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v450 = stdlib.digest([ctc0, ctc0], [v443, v444]);
            const v451 = stdlib.digestEq(v409, v450);
            stdlib.assert(v451, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:115:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v452 = stdlib.digest([ctc0, ctc0], [v446, v445]);
            const v453 = stdlib.digestEq(v410, v452);
            stdlib.assert(v453, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:116:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v454;
            const v455 = stdlib.eq(v445, v428);
            if (v455) {
              v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v456 = stdlib.safeAdd(v444, v427);
              const v457 = stdlib.eq(v445, v456);
              if (v457) {
                v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                const v459 = stdlib.eq(v428, v456);
                if (v459) {
                  v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv373 = v454;
            const cv374 = v447;
            const cv381 = v381;
            
            v373 = cv373;
            v374 = cv374;
            v381 = cv381;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v514 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v517 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:14:decimal', stdlib.UInt_max, '2'), v353);
    const v519 = v514 ? v352 : v368;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v373), {
      at: './index.rsh:126:28:application',
      fs: ['at ./index.rsh:125:9:application call to [unknown function] (defined at: ./index.rsh:125:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v353, v354], secs: v356, time: v355, didSend: v76, from: v352 } = txn1;
  ;
  const v365 = stdlib.safeAdd(v355, v354);
  stdlib.protect(ctc1, await interact.acceptWager(v353), {
    at: './index.rsh:71:29:application',
    fs: ['at ./index.rsh:71:29:application call to [unknown function] (defined at: ./index.rsh:71:29:function exp)', 'at ./index.rsh:71:29:application call to "liftedInteract" (defined at: ./index.rsh:71:29:application)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v352, v353, v354, v365],
    evt_cnt: 0,
    funcNum: 1,
    lct: v355,
    onlyIf: true,
    out_tys: [],
    pay: [v353, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v370, time: v369, didSend: v86, from: v368 } = txn2;
      
      const v372 = stdlib.add(v353, v353);
      sim_r.txns.push({
        amt: v353,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v373 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v374 = v369;
      const v381 = v372;
      
      if (await (async () => {
        const v389 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v389;})()) {
        const v396 = stdlib.safeAdd(v374, v354);
        sim_r.isHalt = false;
        }
      else {
        const v514 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v517 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:14:decimal', stdlib.UInt_max, '2'), v353);
        const v519 = v514 ? v352 : v368;
        sim_r.txns.push({
          kind: 'from',
          to: v519,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v365],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v352, v353, v354, v365],
      evt_cnt: 0,
      funcNum: 2,
      lct: v355,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v532, time: v531, didSend: v291, from: v530 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v352,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v532, time: v531, didSend: v291, from: v530 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:59:35:application',
      fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:74:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v370, time: v369, didSend: v86, from: v368 } = txn2;
    const v372 = stdlib.add(v353, v353);
    ;
    let v373 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v374 = v369;
    let v381 = v372;
    
    let txn3 = txn2;
    while (await (async () => {
      const v389 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v389;})()) {
      const v396 = stdlib.safeAdd(v374, v354);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v396],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v352, v353, v354, v368, v381, v396],
          evt_cnt: 0,
          funcNum: 5,
          lct: v374,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v498, time: v497, didSend: v242, from: v496 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v368,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v498, time: v497, didSend: v242, from: v496 } = txn5;
        ;
        const v499 = stdlib.addressEq(v352, v496);
        const v500 = stdlib.addressEq(v368, v496);
        const v501 = v499 ? true : v500;
        stdlib.assert(v501, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:59:35:application',
          fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v409, v410], secs: v412, time: v411, didSend: v118, from: v408 } = txn4;
        ;
        const v413 = stdlib.addressEq(v352, v408);
        stdlib.assert(v413, {
          at: './index.rsh:90:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v420 = stdlib.safeAdd(v411, v354);
        const v424 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:98:48:application',
          fs: ['at ./index.rsh:97:17:application call to [unknown function] (defined at: ./index.rsh:97:21:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v425 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:99:46:application',
          fs: ['at ./index.rsh:97:17:application call to [unknown function] (defined at: ./index.rsh:97:21:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v352, v353, v354, v368, v381, v409, v410, v420, v424, v425],
          evt_cnt: 2,
          funcNum: 6,
          lct: v411,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:103:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v427, v428], secs: v430, time: v429, didSend: v130, from: v426 } = txn5;
            
            ;
            const v438 = stdlib.safeAdd(v429, v354);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v420],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v352, v353, v354, v368, v381, v409, v410, v420],
            evt_cnt: 0,
            funcNum: 7,
            lct: v411,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v480, time: v479, didSend: v208, from: v478 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v480, time: v479, didSend: v208, from: v478 } = txn6;
          ;
          const v481 = stdlib.addressEq(v352, v478);
          const v482 = stdlib.addressEq(v368, v478);
          const v483 = v481 ? true : v482;
          stdlib.assert(v483, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:59:35:application',
            fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v427, v428], secs: v430, time: v429, didSend: v130, from: v426 } = txn5;
          ;
          const v431 = stdlib.addressEq(v368, v426);
          stdlib.assert(v431, {
            at: './index.rsh:103:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v438 = stdlib.safeAdd(v429, v354);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v438],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v352, v353, v354, v368, v381, v409, v410, v427, v428, v438],
              evt_cnt: 0,
              funcNum: 9,
              lct: v429,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v462, time: v461, didSend: v174, from: v460 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v368,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v462, time: v461, didSend: v174, from: v460 } = txn7;
            ;
            const v463 = stdlib.addressEq(v352, v460);
            const v464 = stdlib.addressEq(v368, v460);
            const v465 = v463 ? true : v464;
            stdlib.assert(v465, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:113:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:59:35:application',
              fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:57:30:function exp)', 'at ./index.rsh:113:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v443, v444, v445, v446], secs: v448, time: v447, didSend: v142, from: v442 } = txn6;
            ;
            const v449 = stdlib.addressEq(v352, v442);
            stdlib.assert(v449, {
              at: './index.rsh:112:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v450 = stdlib.digest([ctc0, ctc0], [v443, v444]);
            const v451 = stdlib.digestEq(v409, v450);
            stdlib.assert(v451, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:115:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v452 = stdlib.digest([ctc0, ctc0], [v446, v445]);
            const v453 = stdlib.digestEq(v410, v452);
            stdlib.assert(v453, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:116:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v454;
            const v455 = stdlib.eq(v445, v428);
            if (v455) {
              v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v456 = stdlib.safeAdd(v444, v427);
              const v457 = stdlib.eq(v445, v456);
              if (v457) {
                v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                const v459 = stdlib.eq(v428, v456);
                if (v459) {
                  v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv373 = v454;
            const cv374 = v447;
            const cv381 = v381;
            
            v373 = cv373;
            v374 = cv374;
            v381 = cv381;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v514 = stdlib.eq(v373, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v517 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:122:14:decimal', stdlib.UInt_max, '2'), v353);
    const v519 = v514 ? v352 : v368;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v373), {
      at: './index.rsh:126:28:application',
      fs: ['at ./index.rsh:125:9:application call to [unknown function] (defined at: ./index.rsh:125:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJAiAHKJgBqAFYMCYDAQABAQAiNQAxGEEFCypkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAApdJIQgMQAGLSSUMQAEySSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQjSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BoAFbNf5JNQVJSiJbNf0lWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENANXWCA0/RY0/BZQARJENANXeCA0+hY0+xZQARJENPs0/hJBAAYjNflCACo0/DQDIQpbCDX4NPs0+BJBAAchBjX5QgARNP40+BJBAAYiNflCAAMjNfk0/zQDIQdbNAMhCVs0A1cwIDT5MgY0AyRbQgLsSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE4huzqbAyBjQDIQpbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAvtJgQYMQACuSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hB1s1/iEJWzX9VzAgNfwkWzX7V1ggNfpXeCA1+Uk1BUkiWzX4JVs194AESiHL/DT4FlA09xZQsDIGNAMhClsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEFNQEyBjUCQgJiSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQxbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAfZJIQYMQADgSYEEDEAAmEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hB1s1/iEJWzX9VzAgNfwkWzX7STUFSVcAIDX6VyAgNfmABGBdpCs0+lA0+VCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEINQEyBjUCQgFsIQYSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEHW7III7IQNANXACCyB7NCAQ9JIwxAAEhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQdbNf+ABJqLkXSwMgY0AyENWwxENP+IAUc0A1cAIDT/NAMhCVsxACMyBjT/SQhCAF9IgaCNBogBJyI0ARJENARJIhJMNAISEURJNQVJIls1/yVbNf6ABKzRH8M0/xZQNP4WULA0/4gA9zIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAfjX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEENQEyBjUCQgA6sSKyASEGNPoLsggjshA0/DT5NP0hBhJNsgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v354",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v354",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v428",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v443",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v444",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v445",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v428",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v443",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v444",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v445",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001dc738038062001dc78339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a4a806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611535565b610197565b6100a16100e8366004611558565b6103fc565b6100a16100fb366004611558565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611558565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be92919061156a565b6100a1610159366004611558565b610941565b6100a161016c3660046115c7565b610ad8565b6100a161017f366004611558565b610dc3565b6100a1610192366004611535565b610f1e565b6101a7600760005414601c61118f565b6101c1813515806101ba57506001548235145b601d61118f565b6000808055600280546101d3906115d9565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115d9565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611662565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e61118f565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be92919061170e565b60405180910390a16102d23415601a61118f565b60608201516102ed906001600160a01b03163314601b61118f565b6102fb4383604001516111b5565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d19183910161173f565b604051602081830303815290604052600290805190602001906103f59291906113ee565b5050505050565b61040c600160005414600961118f565b6104268135158061041f57506001548235145b600a61118f565b600080805560028054610438906115d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115d9565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117c6565b90506104dc81606001514310600b61118f565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d92919061183f565b60405180910390a161052681602001513414600861118f565b61052e611472565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261058681611208565b505050565b61059b600160005414600d61118f565b6105b5813515806105ae57506001548235145b600e61118f565b6000808055600280546105c7906115d9565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906115d9565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117c6565b905061066c8160600151431015600f61118f565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d92919061183f565b60405180910390a16106b13415600c61118f565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114cb565b5050565b610719600560005414601761118f565b6107338135158061072c57506001548235145b601861118f565b600080805560028054610745906115d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906115d9565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d6919061187c565b90506107ea8160a00151431015601961118f565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b92919061183f565b60405180910390a161082f3415601561118f565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b601661118f565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906115d9565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906115d9565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b610951600760005414602161118f565b61096b8135158061096457506001548235145b602261118f565b60008080556002805461097d906115d9565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906115d9565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190611662565b9050610a228160e00151431015602361118f565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a5392919061183f565b60405180910390a1610a673415601f61118f565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b602061118f565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae8600960005414602861118f565b610b0281351580610afb57506001548235145b602961118f565b600080805560028054610b14906115d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906115d9565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba59190611910565b9050610bc4604051806040016040528060008152602001600081525090565b610bd68261012001514310602a61118f565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c493415602461118f565b8151610c61906001600160a01b03163314602561118f565b60408051610cad91610c8791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661118f565b604080516080850135602080830191909152606080870135838501528351808403850181529201909252805191012060c0830151610ced9114602761118f565b61010082015160608401351415610d075760018152610d56565b610d1c83602001602001358360e001516111b5565b6020820181905260608401351415610d375760028152610d56565b80602001518261010001511415610d515760008152610d56565b600181525b610d5e611472565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610dbd81611208565b50505050565b610dd3600960005414602d61118f565b610ded81351580610de657506001548235145b602e61118f565b600080805560028054610dff906115d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2b906115d9565b8015610e785780601f10610e4d57610100808354040283529160200191610e78565b820191906000526020600020905b815481529060010190602001808311610e5b57829003601f168201915b5050505050806020019051810190610e909190611910565b9050610ea5816101200151431015602f61118f565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ed692919061183f565b60405180910390a1610eea3415602b61118f565b8051610863906001600160a01b03163314610f145760608201516001600160a01b03163314610f17565b60015b602c61118f565b610f2e600560005414601261118f565b610f4881351580610f4157506001548235145b601361118f565b600080805560028054610f5a906115d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610f86906115d9565b8015610fd35780601f10610fa857610100808354040283529160200191610fd3565b820191906000526020600020905b815481529060010190602001808311610fb657829003601f168201915b5050505050806020019051810190610feb919061187c565b90506110036040518060200160405280600081525090565b6110148260a001514310601461118f565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161104592919061170e565b60405180910390a16110593415601061118f565b8151611071906001600160a01b03163314601161118f565b61107f4383604001516111b5565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111c283826119bb565b91508110156112025760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111ac565b92915050565b6040805160208101909152600081526020820151516001141561132c5761123f8260200151602001518360000151604001516111b5565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610dbd9291906113ee565b60208201515160021461134457815160600151611348565b8151515b6001600160a01b03166108fc611367600285600001516020015161138f565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113b3575082826113a581836119d3565b92506113b190836119f2565b145b6112025760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111ac565b8280546113fa906115d9565b90600052602060002090601f01602090048101928261141c5760008555611462565b82601f1061143557805160ff1916838001178555611462565b82800160010185558215611462579182015b82811115611462578251825591602001919060010190611447565b5061146e929150611508565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114c660405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114d7906115d9565b6000825580601f106114e7575050565b601f0160209004906000526020600020908101906115059190611508565b50565b5b8082111561146e5760008155600101611509565b60006060828403121561152f57600080fd5b50919050565b60006060828403121561154757600080fd5b611551838361151d565b9392505050565b60006040828403121561152f57600080fd5b82815260006020604081840152835180604085015260005b8181101561159e57858101830151858201606001528201611582565b818111156115b0576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561152f57600080fd5b600181811c908216806115ed57607f821691505b6020821081141561152f57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561164057634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461165d57600080fd5b919050565b600061010080838503121561167657600080fd5b6040519081019067ffffffffffffffff821181831017156116a757634e487b7160e01b600052604160045260246000fd5b816040526116b484611646565b815260208401516020820152604084015160408201526116d660608501611646565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161155160208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161177f60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117d857600080fd5b6040516080810181811067ffffffffffffffff8211171561180957634e487b7160e01b600052604160045260246000fd5b60405261181583611646565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461186d57600080fd5b80604085015250509392505050565b600060c0828403121561188e57600080fd5b60405160c0810181811067ffffffffffffffff821117156118bf57634e487b7160e01b600052604160045260246000fd5b6040526118cb83611646565b815260208301516020820152604083015160408201526118ed60608401611646565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561192357600080fd5b61192b61160e565b61193483611646565b8152602083015160208201526040830151604082015261195660608401611646565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119ce576119ce6119a5565b500190565b60008160001904831182151516156119ed576119ed6119a5565b500290565b600082611a0f57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122028d21beff04cd3c1a5229bb080f62d6476e60a8074ace8e4c5b6d92dd9ab85ec64736f6c634300080c0033`,
  BytecodeLen: 7623,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:69:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:74:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:123:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:79:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:92:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:105:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:113:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
