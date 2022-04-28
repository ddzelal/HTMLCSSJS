import json

fajl = open("python/podaci2.json","w",encoding="UTF-8")

recnik = {"Dzelal":"Novi Pazar","Omer":"Dupljak"}
json.dump(recnik,fajl)
fajl.close()


fajl2 = open("python/podaci2.json","r",encoding="UTF-8")
podaci = json.load(fajl2)
print(podaci)