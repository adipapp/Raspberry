<?php
	$time = $_GET['time'];
	set_time_limit($time+5);
	exec("python " . $_GET['filename'] . " " . $_GET['sensor'] . " " . $time . " " . $_GET['freq'], $output);
	foreach($output as $out) {
		echo $out, '\n';
	}
?>