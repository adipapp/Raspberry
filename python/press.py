# coding=utf-8
#méréshez szükséges csomagok
import time
import sys
import datetime as dt
import xlsxwriter
import Adafruit_BMP.BMP085 as BMP085

sensor = BMP085.BMP085()

#txt file létrehozása
f=open("data.txt","w")
# münkafüzet és lap generálása
workbook = xlsxwriter.Workbook(sys.argv[1])
worksheet = workbook.add_worksheet('RapberryPiMérés')
bold = workbook.add_format({'bold': True})

#A címek meghatározása
worksheet.write('A1','Időpillanat(s)',bold)
worksheet.write('B1','Magasság(m)',bold)
worksheet.write('C1','Nyomás(Pa)',bold)
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
    f.write("%d#" %ciklusseged*int(nagyt))
    f.write("%d#" %(sensor.read_altitude()))
    f.write("%d##\r\n"%(sensor.read_pressure()))
    worksheet.write(row,0,ciklusseged*nagyt)
    worksheet.write(row,1,sensor.read_altitude())
    worksheet.write(row,2,sensor.read_pressure())
    row+=1
    time.sleep(nagyt)
    ciklus=ciklusseged*nagyt
    ciklusseged+=1
    
# mérés lezárása
workbook.close()
f.close()

