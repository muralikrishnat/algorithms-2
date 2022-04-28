console.clear();
var s = 'abch';
var t = 'abjg';

const matchingPairs = (s, t) => {
  let len = t.length;
  let sC = s.split('');
  let tC = t.split('');
  let matchedCount = 0;
  for(let i = 0; i < len; i++) {
      if (s[i] === t[i]) {
        sC[i] = null;
        tC[i] = null;
        matchedCount += 1;
      }
  }
  
  if (sC.filter(x => x).length === 0) {
    return len - 2;
  } else {
    tC = tC.filter(x => x);
    sC = sC.filter(x => x);
    let matchedInUnMatched = 0;
    for (let i = 0; i < tC.length; i++) {
      if (sC.indexOf(tC[i]) >= 0) {
        matchedInUnMatched += 1;
      }
      if (matchedInUnMatched === 2) {
        break;
      }
    }
    return matchedCount + matchedInUnMatched;  
  }
}

[
  {
    s: 'abc',
    t: 'abc',
    v: 1
  },
  {
    s: 'abcdea',
    t: 'abcdaj',
    v: 5
  },
  {
    s: 'abcdefghi',
    t: 'abcdefghi',
    v: 7
  },
  {
    s: 'abdc',
    t: 'abcd',
    v: 4
  },
  {
    s: 'dcba',
    t: 'abcd',
    v: 2
  },
  {
    s: 'asdf',
    t: 'qwer',
    v: 0
  },
  {
    s: 'aeeeeeeeeeeej',
    t: 'eaaaaaaaaaaah',
    v: 1
  }
].forEach(item => {
    console.group(item.s +':' + item.t);
    console.log('Output => ' + item.v +':' + matchingPairs(item.s, item.t));
    console.groupEnd(item.s +':' + item.t);
});