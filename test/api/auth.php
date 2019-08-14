<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username =='admin' && $password == 'admin') {
?>
{
    "success" : true,
    "secret": "This is ok"
}
    <?php
    }else{
    ?>
{
    "success" : false,
    "secret": "Invalid Credentials"

}
<?php
}
}
else 
{
    ?>

{
    "success" : false,
    "secret": "Only Post Access"

}
<?php
}

?>