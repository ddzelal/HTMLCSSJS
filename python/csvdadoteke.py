import csv

fajl =  open("python/podaci.csv","r",encoding="UTf-8",newline="")

citac = csv.reader(fajl)

print(list(citac))

for i in citac: 
    print(i)

fajl.close()


fajl2 = open("python/podaci.csv","w",encoding="UTf-8")
pisac = csv.writer(fajl2)

pisac.writerow(["Dzelal","Dupljak"])
pisac.writerow(["Novi Pazar","36300"])

print(pisac)
fajl2.close()