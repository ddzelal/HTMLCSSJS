function inflationCalculator() {
    let  infationRate = document.querySelector(`#inflationRate`);
    let money = document.querySelector(`#money`);

    infationRate =  parseFloat(infationRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector(`#years`).value;
    years = parseFloat(years);


    let worth = money + (money*(infationRate / 100));
    for (let i=1; i< years; i++){
        worth += worth*(infationRate/100);
    }

    worth = worth.toFixed(2);

    let newElment = document.createElement(`div`);
    newElment.className = `new-elemnt`;
    newElment.innerText = `Danasnjih ${money} $ vrjedi isto kao ${worth} $ za ${years} godina.`;
    document.querySelector(`.container`).appendChild(newElment);
    
}