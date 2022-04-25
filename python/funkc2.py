def kvadrat (a):
    obim = 4*a
    povrsina = a*a

    print(f"O = {obim}\nPovrsina = {povrsina} ") 

stranica = float(input("Unesi stranicu"))
kvadrat(stranica)

def pravogaonik(a,b):
    povrsina= a*b
    obim = 2*a+2*b

    print (f" o = {obim} p = {povrsina}")

st_a = float(input("Unesi str a"))
st_b = float(input("Unesi str b"))
pravogaonik(st_a,st_b)

stranice = []
stranice.append(st_a = float(input("Unesi str a")))
stranice.append(st_a = float(input("Unesi str b")))

obim_pr=pravogaonik (stranice[0],stranice[1])
