function processData(input) {
    //Enter your code here
    let lines = [
        "8",
      "1 abc",
      "3 3",
      "2 3",
      "1 xy",
      "3 2",
      "4",
      "4",
      "3 1"
    ];
    let ops = lines[0].trim() - 1;
    let actions = [], outStr = '';
    for(let i =0; i <= ops; i++) {
      let line = lines[i + 1];
      let [action, str] = line.split(' ');
      switch(action){
        case '1':
          actions.push({
            action,
            str: outStr
          });
          outStr += str;
          break;
        case '2':
          actions.push({
            action,
            str: outStr
          });
          outStr = outStr.substr(0, outStr.length - (str - 0));
          break;
        case '3':
          console.log(outStr[str - 1]);
          break;
        case '4':
          let lastAction = actions.pop();
          if (lastAction) {
            outStr = lastAction.str;  
          }
          break;
        default:
      }
    }
  } 
  
  
  processData();function processData(input) {
    //Enter your code here
    let lines = [
        "8",
      "1 abc",
      "3 3",
      "2 3",
      "1 xy",
      "3 2",
      "4",
      "4",
      "3 1"
    ];
    let ops = lines[0].trim() - 1;
    let actions = [], outStr = '';
    for(let i =0; i <= ops; i++) {
      let line = lines[i + 1];
      let [action, str] = line.split(' ');
      switch(action){
        case '1':
          actions.push({
            action,
            str: outStr
          });
          outStr += str;
          break;
        case '2':
          actions.push({
            action,
            str: outStr
          });
          outStr = outStr.substr(0, outStr.length - (str - 0));
          break;
        case '3':
          console.log(outStr[str - 1]);
          break;
        case '4':
          let lastAction = actions.pop();
          if (lastAction) {
            outStr = lastAction.str;  
          }
          break;
        default:
      }
    }
  } 
  
  
  processData();