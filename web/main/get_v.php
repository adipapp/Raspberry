<?php
	$time = $_GET['time'];
	set_time_limit($time+5);
	exec("python ../../python/" $_GET['scriptname'] . " " . $_GET['filename'] . " " . $_GET['freq'] . " " . $time, $output);
	foreach($output as $out) {
		echo $out, '##';
	}
?>