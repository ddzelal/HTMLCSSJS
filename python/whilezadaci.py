from random import random


import random

br = 4
prozvod = 1

while 4 <= 50 :
    if br % 2 == 0 and br % 3 == 0:
        prozvod = prozvod * br
    br = br + 1
    
print(prozvod)

i = 1
suma = 0
upit = int(input("koliko br zelis da generises"))

while i < upit+1:
    broj = random.randint(1,100)
    print(broj)
    suma = suma + broj
    x = x +1

print ("Srednja vrednost br je :", suma /upit)