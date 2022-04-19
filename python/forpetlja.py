# brojac = 5 

from multiprocessing.context import _force_start_method


for i in range(5):
    print("Ja sam tata")

for x in range(4,21):
    print(x)

for j in range(3,51,2):
    print(j)

for br in range(3,61):
    if br%5==0:
        print(br)

suma = 0
for sto  in range(1,101):
    suma+=1
print(suma)

proizvod = 1 
for k in range (4,51):
    if k%2==0 and k%3==0:
        proizvod*=k
print("prozivod je",proizvod)


mesta = ["Jaklja","Svojbor","Mahala","Hadzet"]


for i in mesta:
    print(i)

brojac = len (mesta)
x = 0

while x<brojac:
    print(mesta[x])
    x+=1

