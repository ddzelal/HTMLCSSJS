from keyword import kwlist


lista = ["Dzelal","Dupljak",23,"Novi Pazar"]
print (lista)
print(lista[0])
print(lista[1])
print(lista[2])
print(lista[3])

print(lista[0]+" "+lista[1])

klub = ["Novi Pazar"]
klub.append("CZV")
klub.append("Partizan")


klub.insert(0,23)
klub.insert(2,"Zeljo")
klub = klub + [33,"Partizan",1999,"Barca"]
print(klub)
print(len(klub))