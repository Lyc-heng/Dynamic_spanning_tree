<?php 
$username = $_POST['newdata'];
file_put_contents('user-json.json', $username);
echo "success";
 ?>