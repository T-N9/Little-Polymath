<?php
// Start the session
session_start();
?>
<?php include "header.php";
    // html head section
?>
<?php
    $_SESSION['myArray']=array();
    for ($i=1; $i<=11; $i++) {
        $num[$i] = mt_rand(1,29);
        for ($j=1; $j<$i; $j++) {             
            while ($num[$j] == $num[$i]){               
                $num[$i] = mt_rand(1,29);               
                $j = 1;             
            }           
        } 
        array_push($_SESSION['myArray'],$num[$i]);  
    } 
    sort($_SESSION['myArray']);
    print_r($_SESSION['myArray']);

    $_SESSION['count']=1;
    $_SESSION['mark']=0;
?>
<button name=submit type=submit class=btn id=gogo>GO GO GO</button>
<script src="dist/js/jquery.js"></script>
<script src="dist/js/first.js"></script>
<?php include "footer.php";?>