spisak = ["park","jezero","klupice","spance musice"]

while True:

    unos = input("Unesi kultruno dobro")

    if unos not in spisak:
        spisak.append(unos)
    print(spisak)

    pitanje = input ("Unos d-da n-ne:").lower
    while pitanje not in ['d','n']:
        pitanje = input("Uneli ste pogreasno slovo,ponovi").lower

    if pitanje == "n":
        break
    else:
        continue
