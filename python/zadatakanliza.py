index = input("Unesi br indexa").upper
godina_upisa = "20"+index[2:4]
print("Godina upisa:",godina_upisa)

if int(godina_upisa)>=2006 and int(godina_upisa)<2009:
    print("Akreditacija:2006")
elif int(godina_upisa)>=2009 and int(godina_upisa)<2013:
    print("Akreditacija:2009")
elif int(godina_upisa)>=2014 and int(godina_upisa)<2020:
    print("Akrediacija:2020")

modul = index[0:2]

if modul=="TS":
    print("Modul TS")
if modul=="PS":
    print("Modul PS")
