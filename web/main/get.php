<?php
	$time = $_GET['time'];
	set_time_limit($time+5);
	exec("python ..\..\python\\" . "trial.py " . $time . " " . $_GET['filename']);
	echo $_GET['OK'];
?>