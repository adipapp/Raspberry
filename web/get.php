<?php
	exec("python ..\python\\" . $_GET['file']);
	echo $_GET['file'];
	
?>