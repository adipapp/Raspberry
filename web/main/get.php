<?php
	$time = $_GET['time'];
	set_time_limit($time+5);
	exec("sudo python3 ../../python/" . $_GET['scriptname'] . " " . $_GET['filename'] . " " . $_GET['freq'] . " " . $time, $output);
	echo "OK";
	foreach($output as $out){
	echo $out;}
?>
