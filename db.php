<?php
header("Content-type: application/json");

$sql = $_POST["query"];
//yes, I know I'm committing a db password. It's read-only. Enjoy it if it's still up!
$link = mysql_connect('db.nn14.yahel.com', 'netroots2015', 'JoeBiden');

mysql_select_db("wtpdashboard");

$start_time = microtime(true);

$result = mysql_query($sql);

$diff = number_format(microtime(true) - $start_time, 2); 

$json = array();
if($result === false){ //mysql error
	echo json_encode(array("error"=>mysql_error()));
}
else{
	$header = mysql_fetch_assoc($result);
	if($header && count($header)){
		$json[] = @array_keys($header);
		$json[] = @array_values($header);
		
		while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
			$json[] = $row;
			if(count($json)>1000){break;}
		}
		echo json_encode(array("time"=>$diff, "data"=>$json));
	}
	else{
		echo '{"data":[]}';
	}
	
}
?>