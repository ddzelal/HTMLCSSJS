frekvencija = float (input("Unedsite freq"))

if frekvencija>=3 and frekvencija<30:
    print("dekamntarski - kratki talas")
    print("HF")
elif frekvencija >30 and frekvencija<300:
    print("metarski - ultrakratki talasi")
    print("VHF")
elif frekvencija >=3000 and frekvencija<=30000:
    print("centimentarski talsi")
    print("SHF")
else:
    print("Uneta frq ne pripada ospegu")
