<?php
	$time = $_GET['time'];
	set_time_limit($time+5);
	exec("python ..\..\python\\test.py " . $_GET['sensor'] . " " . $time . " " . $_GET['freq'], $output, $return_value);
	echo $return_value;
	foreach($output as $out) {
		echo $out, '##';
	}
?>