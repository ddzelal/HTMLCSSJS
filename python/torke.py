lista = ["a","b","c"]
print(lista[1])

torka  = ("a","b","C")

y = {"poz1":"a","poz2":"b","poz3":"c"}
print(y["poz1"])

print(y.keys(),y.values())

for i in y.keys ():
    print(i)
for i in y.values():
    print(i)
for i,y in y.items():
    print(i,y)


recnik = {1:"a",2:{"Ime":"Dzelal","Prezime":"Dupljak"}}

print(recnik[2]["Prezime"])

recnik[3] = "c"

print(recnik)