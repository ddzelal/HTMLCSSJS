import json

fajl = open("python/podaci2.json","r",encoding="UTF-8")
podaci = json.load(fajl)

podaci["novi"]="Podatak",3

fajl2 = open("python/podaci2.json","w",encoding="UTF-8")

json.dump(podaci,fajl2)
fajl2.close()
print(podaci)

fajl.close()