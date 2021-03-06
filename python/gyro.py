#méréshez szükséges csomagok
import time
import sys
import datetime as dt
import xlsxwriter
import Adafruit_ADXL345

# münkafüzet és lap generálása
workbook = xlsxwriter.Workbook('Meresijegyzokonyv_3ax.xlsx')
worksheet = workbook.add_worksheet('RapberryPiMérés')
bold = workbook.add_format({'bold': True})

#A címek meghatározása
worksheet.write('A1','Időpillanat(s)',bold)
worksheet.write('B1','X',bold)
worksheet.write('C1','Y',bold)
worksheet.write('D1','Z',bold)

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

#mérés maga
while ciklus<idotartam:
    x, y, z = accel.read()
    print(x,'#',y,'#',z)
    worksheet.write(row,0,ciklusseged*nagyt)
    worksheet.write(row,1,x)
    worksheet.write(row,2,y)
    worksheet.write(row,3,z)
    row+=1
    time.sleep(nagyt)
    ciklus=ciklusseged*nagyt
    ciklusseged+=1
    
#lezárás
workbook.close()