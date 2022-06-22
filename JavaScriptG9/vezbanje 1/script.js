mPlate = [];
class Radnik {
  imeFirme = "CepkanjeDrva.d.o.o";
  constructor(i, p, rm, pl, rs) {
    this.ime = i;
    this.prezime = p;
    this.radnoMesto = rm;
    this.plata = pl;
    this.radniStaz = rs;
  }

  mesecnaPlata(brojRadnihSati, satnica) {
    let mp = brojRadnihSati * satnica;

    console.log("Mesecna plata za ovaj mesec je:", mp, "Radnik:", this.ime);
    return mPlate.push(mp, this.ime);
  }
}

let PrviRadnik = new Radnik(
  "Dzelal",
  "Dupljak",
  "Cepas Drva",
  "40000",
  "20godina"
);
let DrugiRadnik = new Radnik(
  "Daris",
  "Smrad",
  "Cepas Drva",
  "43000",
  "22godina"
);
let TreciRadnik = new Radnik(
  "Abaz",
  "Abazovic",
  "Cepas Drva",
  "4444000",
  "12godina"
);

PrviRadnik.mesecnaPlata(260, 200);
DrugiRadnik.mesecnaPlata(220, 300);
TreciRadnik.mesecnaPlata(257, 350);

const TroskoviFirme = (arr) => {
  tf = 0;
  for (i = 0; i < arr.length; ) {
    tf += arr[i];
    i += 2;
  }
  return tf;
};
// console.log(mPlate)
console.log("TroskoviFirme", TroskoviFirme(mPlate));
