print("Koji zadatak radis")
zadatak = int (input())

if zadatak == 1:

    podaci = input("Unesite duzinu i sirinu")

    stranice = podaci.split(" ")

    obim = 2*float( stranice[0]) + 2* float(stranice[1])
    povrsina = float(stranice[0])*float(stranice[1])

    print("o=",obim)
    print("p=",povrsina)

if zadatak == 2:
    opstina = ["Novi Pazar"]
    opstina.append("Beograd")
    opstina.append("Kraljevo")
    opstina.append("Nis")
    opstina.append("Tutin")
    print(opstina)
    print("duzina liste",len(opstina))

    opstina.remove("Tutin")
    opstina.sort()
    print(opstina)
    opstina.sort(reverse=True)
    print(opstina.index("Beograd"))

if zadatak == 3:
    namirnice = [["hleb",30],["jaja",14]]
    namirnice[0].append(int(input("Unesi kolicinu hleba")))
    namirnice[1].append(int(input("Unesi kolicinu jaja3")))
    trosak =  namirnice[0][2]*namirnice[0][1] + namirnice[1][2]*namirnice[1][1]
    print("Trosak:",trosak)
       
