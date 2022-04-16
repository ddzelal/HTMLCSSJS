from re import S
from turtle import up


class zaposleni:
    def __init__(self,ime,prezime,radno_mesto,sektor,broj_sati,plata,satnica):
        self.ime =ime
        self.prezime = prezime
        self.radno_mesto = radno_mesto
        self.sektro = sektor
        self.broj_sati = broj_sati
        
        self.plata = plata
        self.satnica = satnica
    
    def platar(self):
        print(self.satnica*self.broj_sati)

zaposljeni1 = zaposleni("Dzelal","Dupljak","Prof","IT",220,45000,2)
zaposljeni2 = zaposleni("Alan","Kardovic","Krativac","Nauka",100,75000,5)
zaposljeni3 = zaposleni("Hamza","Ganic","Fudbaler","Sport",420,14500,40)
zaposljeni4 = zaposleni("Muhamed","Ajanovic","Student","IT",20,25000,30)
zaposljeni5 = zaposleni("Haris","Muratovic","Odzacar","Zanat",320,6505,34)


lista = [zaposljeni1,zaposljeni2,zaposljeni3,zaposljeni4,zaposljeni5]

for i in lista:
    print("Plata --->",zaposleni.platar(i))

    print("ime:",i.ime,"Prezime:",i.prezime,"Radno mesto:",i.radno_mesto,"Plata:",i.plata)
    
    







   