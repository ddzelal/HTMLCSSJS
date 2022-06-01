odabir = prompt("Koji zadatak zelis?");
odabir_p = parseInt(odabir);

switch (odabir_p) {
  case 1:
    broj = "";

    for (i = 1; i < 10; i++) {
      console.log(broj);
      broj = broj + i;
    }
    // console.log(broj)

    break;

  case 2:
    var i, j;

    br = "";
    rez = [];
    ispis = "";

    for (i = 1; i <= 5; i++) {
      for (j = 1; j <= i; j++) {
        rez = i.toString();
        console.log(rez);
      }
    }

    break;

  case 3:
    for (i = 1; i <= 7; i++) {
      var res = [];
      for (a = 1; a <= i; a++) {
        res.push(i);
      }
      console.log(res.join(""));
    }

  case 4:
    brojevi = 10;
    for (i = 1; i <= 4; i++) {
      str = 0;
      for (j = i; j < i; j++) {}
    }

    break;

  case 5:
    zvezda = "";
    space = " ";

    for (i = 1; i <= 4; i++) {
      for (j = i; j <= 4; j--) {
        space += " ";
      }
      zvezda += "*";
      console.log(zvezda);
    }

    break;

  case 6:
    let brojac = 0;
    unos = Number(prompt("Koliko zelite brojeva?"));
    broj = 0;

    while (brojac !== unos) {
      if (broj % 2 === 1) {
        console.log(broj);
        brojac++;
      }
      broj++;
    }

    break;

  case 7:
    br = 0;
    // BROJAC = 10;
    suma = 0;

    while (br < 10) {
      suma += br;
      br++;
      console.log(suma);
    }

    break;

  case 8:
    br = 1;

    while (br < 100) {
      if ((br % 5 === 0) & (br % 3 === 0)) {
        console.log("fizbuz");
        br++;
      } else if (br % 3 === 0) {
        console.log("FIZ");
        br++;
      } else if (br % 5 === 0) {
        console.log("buz");
        br++;
      }

      console.log(br);
      br++;
    }

    break;
  //напишите програм који ће тражити број док не унесете негативан број. На крају одштампајте збир свих унетих бројева.

  case 9:
    unos = Number(prompt("Unesite negativan broj"));
    suma = 0;
    suma += unos;

    while (0 < unos) {
      unos = Number(prompt("Niste uneli negativan broj,unesite ponovo"));

      suma += unos;
    }
    console.log(`Negatini broj je: ${unos}`);
    console.log("Suma svih unetih brojeva je:", suma);

    break;

  case 10:
    //напишите програм који ће тражити име док корисник не унесе ЕНД. одштампајте име сваки пут. када завршите, одштампајте "готово сам"

    unos = prompt("Uneiste `end`").toLowerCase();

    while (unos !== "end") {
      unos = prompt("Uneiste `end`").toLowerCase();
      console.log(unos);
    }

    if (unos === "end") {
      console.log("Ja sam gotov");
    }
    break;

  case 11:
    //све док има више оцена, додајте их укупном. подели укупан број са бројем курсева (свака оцена је курс)
    //одштампати одговарајућу последњу оцену.
    //зауставити када корисник унесе негативну оцену

    suma_ocena = 0;
    brojac_ocena = 0;

    negativna = 1;
    unos = Number(prompt("Unesite ocenu:"));
    if (unos > 1) {
      console.log("Uneli ste ocenu:", unos);
      brojac_ocena++;
    }

    while (unos > negativna && unos <= 5) {
      unos = unos = Number(prompt("Unesite ocenu:"));
      console.log("Uneli ste ocenu:", unos);
      brojac_ocena++;
      suma_ocena = suma_ocena + unos;
    }
    console.log("Uneli ste negativnu ocenu");
    // console.log(brojac_ocena)
    prosek = suma_ocena / brojac_ocena;

    console.log("Zbir svih ocena je:", suma_ocena);
    console.log("Prosecna ocena je:", prosek);

    break;

    case 12:

      while(true){

        unos_operacije = prompt("Unesite operaciju");
        rez=0;

        if(unos_operacije === "exit" || unos_operacije === '0'){
          console.log("GRESKA")
          break
        }

        
  
        if(unos_operacije === "+"){
          console.log("sabirate dva broja")
          a = Number(prompt("Unesite a:"))
        b = Number(prompt("Unesite b:"))
          rez = a + b;
          console.log("Rezultat je:",rez)
        }
  
        else if(unos_operacije === "-"){
          console.log("oduzmite dva broja:")
          a = Number(prompt("Unesite a:"))
        b = Number(prompt("Unesite b:"))
          rez = a - b;
          console.log("Rezultat je:",rez)
        }
  
        else if(unos_operacije === "*"){
          console.log("pomnozite dva broja:")
          a = Number(prompt("Unesite a:"))
        b = Number(prompt("Unesite b:"))
          rez = a * b;
          console.log("Rezultat je:",rez)
  
        }
  
        else if (unos_operacije === "/"){
          console.log("podelite dva broja:")
          a = Number(prompt("Unesite a:"))
        b = Number(prompt("Unesite b:"))
          rez = a / b;
          console.log("Rezultat je:",rez)
        }
  
  

      }

     
      break;
}
