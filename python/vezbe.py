imeprezime = input ("Unesite Ime i Prezime")
razmak = imeprezime.find (" ")
ime = imeprezime [0:razmak]
prezime = imeprezime [razmak+1:]
pocetnaslova = ime [0]+prezime[0]

print ("Duzina imena :",(ime))
print ("Duzina prezimena :",(prezime))
print ("Incijali su",(pocetnaslova.upper()))