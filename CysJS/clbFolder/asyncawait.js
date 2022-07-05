const prom = new Promise((res, rej) => {
  res();
});

function func1() {
  console.log("nest1");
  console.log("nest2");
  console.log("nest3");
  return prom.then(() => {
    console.log("promseee!");
  });
}


func1();


// async function func1() {
//     console.log('nesto1');
//     await prom.then(() => {
//         console.log('promiseee!');
//     })
//     console.log('nesto2');
//     console.log('nesto3');
// }


res = 'sta ima'



async function Test(res){
    console.log('Kako ti ide danas ?');
    await prom.then(()=> {
        console.log(res);
    })
    console.log('Odmori ga malo');
    

}

Test(res)