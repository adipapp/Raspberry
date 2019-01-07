# coding=utf-8
#adatmozgatáshoz szükséges csomag(ok)
import xlsxwriter
import sys
#méréshez szükséges csomagok
import time
from w1thermsensor import W1ThermSensor


#mérés maga
sensor = W1ThermSensor()

#txt file létrehozása
f=open("data.txt","w")
# münkafüzet és lap generálása
workbook = xlsxwriter.Workbook(sys.argv[1])
worksheet = workbook.add_worksheet('RapberryPiMérés')
bold = workbook.add_format({'bold': True})

#A címek meghatározása
worksheet.write('A1','Időpillanat(s)',bold)
worksheet.write('B1','Hőmérésklet(C*)',bold)
#a szenzor adatainak beszerzése
frek=int(sys.argv[2])
nagyt=1/frek
idotartam=int(sys.argv[3])
#ciklushoz kapcsolódó változók deklarálása
ciklus=0
ciklusseged=0
row=1
column=0
while ciklus<idotartam:
    temperature = sensor.get_temperature()
    f.write("%d#" %ciklusseged*int(nagyt))
    f.write("%d##\r\n"%temperature)
    worksheet.write(row,0,ciklusseged*nagyt)
    worksheet.write(row,1,temperature)
    row+=1
    time.sleep(nagyt)
    ciklus=ciklusseged*nagyt
    ciklusseged+=1
    
# mérés lezárása
workbook.close()
f.close()


