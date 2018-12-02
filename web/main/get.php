<?php
	$time = $_GET['time'];
	set_time_limit($time+5);
	exec("python3 ../../python/" . $_GET['scriptname'] . " " . $_GET['filename'] . " " . $_GET['freq'] . " " . $time);
	echo 'OK';
?>