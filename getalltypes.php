<?php
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','library');

$con= new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
if($con ->connect_error){
    die('Error: '.$con->connect_error);
}

$con->set_charset('utf8');

$sql='SELECT * FROM types order by name';
$result=$con->query($sql);

if($result->num_rows>0){
    //van adat
    $value=$result->fetch_all(MYSQLI_ASSOC);

    /*echo "<pre>";
    print_r($value);
    echo "</pre>";*/
    echo json_encode($value);
}
else{
    //nincs adat
    echo json_encode(

        array("error" => "Nincsenek adatok")
    );
}
?>