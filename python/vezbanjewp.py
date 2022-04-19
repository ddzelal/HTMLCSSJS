spisak = ["park","jezero","klupice","spance musice"]

while True:

    unos = input("Unesi kultruno dobro")

    if unos not in spisak:
        spisak.append(unos)
    print(spisak)

