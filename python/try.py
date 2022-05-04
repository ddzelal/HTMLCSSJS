# try and ex


try:
    broj = int(input("Unesited ceo broj"))
    rezultat = 2/broj
    print(f"Rezultat {rezultat} ")
except ZeroDivisionError:
    print("Uneti broj nije deljiv") 
except ValueError:
    print("Broj se ne deli sa textom") 
except:
    print("Pojavila se greska")
finally:
    print("Ovaj text sed uvek izvrsava")