<?php
	$time = $_GET['time'];
	set_time_limit($time+5);
	exec("python3 ../../python/" . $_GET['scriptname'] . " " . $_GET['filename'] . " " . $_GET['freq'] . " " . $time, $output, $return_value);
	echo $return_value;
	foreach($output as $out) {
		echo $out, '##';
	}
?>