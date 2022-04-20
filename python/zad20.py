datum = input("Unesite datum:").rstrip(".")

podaci = datum.split(".")
print(podaci)

meseci = [
    [1,"januar"],
    [2,"februar"],
    [3,"mart"],
     [4,"april"],
      [5,"maj"],
       [6,"jun"],
       [7,"jul"], 
       [8,"avgust"], 
       [9,"septembar"], 
       [10,"oktobmar"], 
       [11,"novembar"], 
       [12,"decemabarar"]
]

for i in range(12):
    if int(podaci[1])==meseci[i][0]:
        print("Mesec",meseci[i][1])
        break

if int(podaci[2])%400 == 0:
    print("Godina je prestupna")
elif int(podaci[2])%100!=0 and int(podaci[2])%4==0:
    print("Godina je prestupna")
else:
    print("Godina je prestupna")