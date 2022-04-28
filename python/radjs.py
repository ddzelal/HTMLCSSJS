import json

fajl = open("python/txtjson.json","r",encoding="UTF-8")


podaci = json.load(fajl)
fajl.close()
print(podaci.items())
print(podaci["a"])
