from time import sleep
import sys
import datetime

# sys.argv[] = filename, sensor_type, time, freq
# output: datetime.datetime.now, sensor_type, id

freq=int(sys.argv[3])
time=int(sys.argv[2])
sensor=sys.argv[1]

max_id=time*freq

for i in range(1, max_id+1):
	print(str(datetime.datetime.now()) + '	' + sensor + '	' + str(i))
	sys.stdout.flush()
	sleep(1/freq)