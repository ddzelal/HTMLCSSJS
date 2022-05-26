

nizA=[1,2,3,4];

nizB=[]

for(i=0; i<nizA.length; i++){
    nizB.push(nizA[i])
}

nizA.pop();
console.log(nizB,nizA)



nizString = ["Red","Green","White","Black"];
nizStringA=[]

for(i=0; i<nizString.length; i++){
    console.log(String(nizString[i]))
    nizStringA.push(nizString[i])
    nizStringA.push('*')
}





str = "Sta Radios koako si"

nizStr = []

for(i=0; i<str.length; i++){
    nizStr.push(str[i])
}

nizTri = []
for(i=0; i<nizStr.length; i++){
    if(nizStr[i] % 2 ===1){
        nizTri.push(nizStr[i]).toUpperCase();
    }
    else{
        nizTri.push(nizStr[i]).toLowerCase();
    }
}

console.log(nizTri)


















