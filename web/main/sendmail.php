<?php
	exec("sudo sendemail -f mobilis.noreply@gmail.com -t " . $_GET['address'] . " -u Mobilis mérési jegyzőkönyv" . " -m Üdvözlettel: Mobilis Team" . " -a " . $_GET['filename'], $output);
	foreach($output as $out) { echo $out; }
?>
