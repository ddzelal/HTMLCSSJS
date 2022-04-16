br = 4
prozvod = 1

while 4 <= 50 :
    if br % 2 == 0 and br % 3 == 0:
        prozvod = prozvod * br
    br = br + 1
    
print(prozvod)