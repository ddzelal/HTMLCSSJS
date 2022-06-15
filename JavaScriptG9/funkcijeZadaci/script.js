//the quick brown fox //vratiti The Quick Brown Fox

const toUpperCaseString = (str) => {
  V_str = str.split(" ");
  velikaS = "";
  for (i = 0; i < V_str.length; i++) {
    for (j = 0; j < V_str[i].length; j++) {
      if (V_str[i][0] === V_str[i][j]) {
        velikaS += V_str[i][0].toUpperCase();
      } else {
        velikaS += V_str[i][j];
      }
    }
  }

  return velikaS;
};

console.log(toUpperCaseString("the quick brown fox"));
console.log(toUpperCaseString("amar starcanin amel bisevac"));

//roveri jel broj polindrom 1234321

const checkNumber = (num) => {
  var nizBr = num.toString().split("");
  var broj = nizBr.map(Number);

  provera = false;

  for (i = 0, j = broj.length - 1; i < broj.length; i++, j--) {
    if (broj[i] !== broj[j]) {
      provera = false;
      break;
    } else {
      // console.log("Broj je polindrom")
      provera = true;
    }
  }

  if (provera === true) {
    return console.log("Broj je polindrom");
  } else if (provera === false) {
    return console.log("Broj nije polindrom");
  }
};


checkNumber(123321)
// broj = [1,2,3,4,3,2,1]
// provera = false;

// for(i=0, j=broj.length -1; i<broj.length; i++,j--){
//    if(broj[i] !== broj[j]){
//     provera=false;
//     break;
//    }
//    else{

//     // console.log("Broj je polindrom")
//     provera=true;

//    }
// }

// if(provera === true){
//     console.log("Broj je polindrom")
// }
// else if(provera === false){
//     console.log("Broj nije polindrom")
// }
