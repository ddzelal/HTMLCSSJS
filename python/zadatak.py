from ctypes.wintypes import PINT
from json.tool import main




hleb_cena = 60
jaja_cena = 18
mleko_cena = 110

hleb_kolicina = int (input ("Unesite kolicinu hleba"))
jaja_kolicina = int (input ("Unesite kolicinu jaja"))
mleko_kolicina = int (input ("Unesite kolicinu mleko"))

racun = hleb_cena*hleb_kolicina + jaja_cena*jaja_kolicina + mleko_cena*mleko_kolicina

print ("Ukupan racun",racun , "Dinara")