# coding=utf-8
#méréshez szükséges csomagok
import time
import sys
import datetime as dt
import xlsxwriter
import board
import busio
import adafruit_tsl2591
i2c = busio.I2C(board.SCL, board.SDA)
sensor = adafruit_tsl2591.TSL2591(i2c)

#txt file létrehozása
f=open("data.txt","w")
# münkafüzet és lap generálása
workbook = xlsxwriter.Workbook(sys.argv[1])
worksheet = workbook.add_worksheet('RapberryPiMérés')
bold = workbook.add_format({'bold': True})

#A címek meghatározása
worksheet.write('A1','Időpillanat(s)',bold)
worksheet.write('B1','Fényerősség(lux)',bold)
worksheet.write('C1','Látható fény(lux)',bold)
worksheet.write('D1','Infravörös(lux)',bold)
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
    f.write("%d#" %sensor.lux)
    f.write("%d#" %sensor.visible)
    f.write("%d##\r\n"%sensor.infrared)
    worksheet.write(row,0,ciklusseged*nagyt)
    worksheet.write(row,1,sensor.lux)
    worksheet.write(row,2,sensor.visible)
    worksheet.write(row,3,sensor.infrared)
    row+=1
    time.sleep(nagyt)
    ciklus=ciklusseged*nagyt
    ciklusseged+=1
    
# mérés lezárása
workbook.close()
f.close()

