console.clear();
var s_1 = "dcbefebce";
var t_1 = "fd";
// Add any extra import statements you may need here


// Add any helper functions you may need here


function minLengthSubstring(s, t) {
  // Write your code here
  console.log('s:t', s, t);
  let indexes = [];
  let len = t.length;
  let newS = s;
  let charFound = 0;
  for(let i = 0; i < len; i++) {
    let fChar = t[i];
    if (newS.indexOf(fChar) >= 0) {
      let charIndex = newS.indexOf(fChar);
      indexes.push(charIndex);
      charFound += 1;
      newS = newS.substr(0, charIndex) + newS.substr(charIndex + 1);
    }
  }
  if (charFound === len) {
    const [min , max] = indexes.reduce((a, b) => {
      if (a[0] > b) {
        a[0] = b;
      }
      if (a[1] < b) {
        a[1] = b;
      }
      return a;
    }, [Infinity, -1]);
    return (max - min) + 1;
  }
  return -1;
}










// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var expected_1 = 5;
var output_1 = minLengthSubstring(s_1, t_1);
check(expected_1, output_1);

var s_2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
var t_2 = "cbccfafebccdccebdd";
var expected_2 = -1;
var output_2 = minLengthSubstring(s_2, t_2);
check(expected_2, output_2);

// Add your own test cases here
