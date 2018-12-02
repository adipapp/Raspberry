<?php
	exec("sendemail -f mobilis@gmail.com -t " . $_GET['address'] . " -u \"Mobilis mérési jegyzőkönyv\" -a" . $_GET['filename'], $output);
	if(count($output) == 1) echo "OK";
?>