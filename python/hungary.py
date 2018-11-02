import csv
import os
import matplotlib.pyplot as plt

with open("..\python\mohely.csv", "rt") as file:
    filereader = csv.DictReader(file,delimiter=';', quotechar='"')
    db = 0
    for i in filereader:
        db += 1
        if db % 10 == 0:
            actDegX = float(i["KeletiHossz"].split(':')[0])
            actMinX = float(i["KeletiHossz"].split(':')[1].split('.')[0])
            actSecX = float(i["KeletiHossz"].split('.')[1])

            actDegY = float(i["ÉszakiSzél"].split(':')[0])
            actMinY = float(i["ÉszakiSzél"].split(':')[1].split('.')[0])
            actSecY = float(i["ÉszakiSzél"].split('.')[1])
                     
            plt.plot(actDegX+(actMinX+(actSecX/60))/60, actDegY+(actMinY+(actSecY/60))/60, "b*")

plt.show()