unos = prompt("Unesite dva elemnta u formatu x.y")

// console.log(unos_parse);

unos_s = unos.split(".");

prvi = parseInt(unos_s[0]);
drugi = parseInt(unos_s[1]);


console.log(prvi,drugi);

rezultat = prvi + drugi;

console.log("rezultat dva elemnta:",rezultat);



var twoSum = function(nums, target) {
    
};

target = 9;

nums = [2,7,11,15];
// ova petlja ide kroz ceo niz od pocetka do kraja
res = []
//prazan niz
for (i = 0; i < nums.length; i++) 
{  
    for (let j = i+1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            res.push(i)
            res.push(j)
        } 
    }   
}

console.log(res)







