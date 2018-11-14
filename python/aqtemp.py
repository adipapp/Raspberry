#adatmozgatáshoz szükséges csomag(ok)
import xlsxwriter
import sys
#méréshez szükséges csomagok
import time
from w1thermsensor import W1ThermSensor
sensor = W1ThermSensor()

# münkafüzet és lap generálása
workbook = xlsxwriter.Workbook('Meresijegyzokonyv_aqrtemp.xlsx')
worksheet = workbook.add_worksheet('RapberryPiMérés')
bold = workbook.add_format({'bold': True})

#A címek meghatározása
worksheet.write('A1','Időpillanat(s)',bold)
worksheet.write('B1','Hőmérésklet(C*)',bold)

#a szenzor adatainak beszerzése
jegyzokonyv=sys.argv[1]
frek=sys.argv[2]
nagyt=1/frek
idotartam=sys.argv[3]
#ciklushoz kapcsolódó változók deklarálása
ciklus=0
ciklusseged=0
row=1
column=0
mennyit=idotartam/nagyt

#mérés maga
while ciklus<idotartam:
    temperature = sensor.get_temperature()
    print(ciklusseged*nagyt,'#',temperature)
    worksheet.write(row,0,ciklusseged*nagyt)
    worksheet.write(row,1,temperature)
    row+=1
    time.sleep(nagyt)
    ciklus=ciklusseged*nagyt
    ciklusseged+=1
 
# mérés lezárása
workbook.close()