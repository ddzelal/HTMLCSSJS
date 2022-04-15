
from turtle import st


class Radnik:
    def __init__(self,ime,prezime,godina,plata) :
        self.ime = ime
        self.prezime = prezime
        self.godina = godina
        self.plata = plata

radnik1 = Radnik("Dzelal","Dupljak",23,350)
radnik2 = Radnik("Eldar","Fax",23,250)
radnik3 = Radnik("Mirsad","Djerlek",43,2350)

print("ime:" + radnik1.ime + "prezime:" + radnik1.prezime + "godine:" + str(radnik1.godina) + "plata:" + str(radnik1.plata))
print("ime:" + radnik2.ime + "prezime:" + radnik2.prezime + "godine:" + str(radnik2.godina) + "plata:" + str(radnik2.plata))
print("ime:" + radnik3.ime + "prezime:" + radnik3.prezime + "godine:" + str(radnik3.godina) + "plata:" + str(radnik3.plata))
        