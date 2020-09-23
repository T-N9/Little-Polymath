<?php
// Start the session
session_start();
?>
<?php include_once "includes/dbh.php";
    // database connection for main div
?> 
<?php include "header.php";
    // html head section
?>
<!-- for sounds -->
<audio id="default_Audio">
  <source src="dist/sound/default_sound.mp3" type="audio/mp3"> 
</audio>
<audio id="right_Audio">
    <source src="dist/sound/right_sound.mp3" type="audio/mp3">
</audio>
<audio id="false_Audio">
    <source src="dist/sound/false_sound.mp3" type="audio/mp3">
</audio>
<audio id="time_Audio">
    <source src="dist/sound/time_sound.mp3" type="audio/mp3">
</audio>
<!-- main div is after body -->
<div id="main">
    <?php 
                // if(array_key_exists('continue', $_POST)) { 
                //     continue1(); 
                // } 
                
                // function continue1() { 
                //     $_SESSION['count']++; 
                // } 
                
                
                if($_SESSION['count']<=9){             
                if(isset($_POST['continue_r'])) { 
                    $_SESSION['mark']=$_SESSION['mark']+100;
                    $_SESSION['count']=$_SESSION['count']+1;
                    
                } 
                if(isset($_POST['continue_w'])) { 
                    $_SESSION['count']=$_SESSION['count']+1;
                    
                } 
                
                print_r($_SESSION['myArray']);
                print_r($_SESSION['mark']);
                $que_n=$_SESSION['count'];
                $shuffnum=$_SESSION['myArray'][$_SESSION['count']]; #shuffle n numbers according to lpquestions data
                echo "<p id=suff_num>".$shuffnum."</p><br><p id=cnum>".$_SESSION['count']."</p>"; #for using shuffnum in lp.js but not display in web page
                $sql="SELECT * FROM lpquestions WHERE QID=$shuffnum;"; # lpquestions table က qid ကို shuffnumနဲ့ shuffleလုပ်ပြီး ထုတ်တယ်
                $result=mysqli_query($conn,$sql); #connection to database
                $resultCheck=mysqli_num_rows($result); #checking data is available or not
                if($resultCheck>0){
                    // and $_SESSION['count']<=10
                    while($row=mysqli_fetch_assoc($result)){
                        echo "<div id=in_sec><h4 id=que>Question : </h4><h4 id=loop_num>".$que_n."</h4><div id=countdown>20 s</div><br><br><div id=que_cq><h3 id=cate_plc>".$row['category'].
                        "</h3><p id=ques_plc>".$row['question']."</p><br>".
                        "<div id=btn_spc><button name=submit type=sumbit class=btn id=btn1>".$row['op_one']."</button>"."<br><br>".
                        "<button name=submit type=sumbit class=btn id=btn2>".$row['op_two']."</button>"."<br><br>".
                        "<button name=submit type=sumbit class=btn id=btn3>".$row['op_three']."</button>"."<br><br>".
                        "<button name=submit type=sumbit class=btn id=btn4>".$row['op_four']."</button></div></div><br>";
                        
                    }
                    
                }
            }
            else{
                if(isset($_POST['continue_r'])) { 
                    $_SESSION['mark']=$_SESSION['mark']+100;
                    $_SESSION['count']=$_SESSION['count']+1;
                    
                } 
                if(isset($_POST['continue_w'])) { 
                    $_SESSION['count']=$_SESSION['count']+1;
                    
                } 
                echo "<div id=in_sec><br><br><div id=que_cq>it is done :<p id=f_mark>".$_SESSION['mark']."</p>";
                if($_SESSION['mark']<400){
                    echo "<br><p>You failed.</p>";
                }
                else if($_SESSION['mark']==400 or $_SESSION['mark']==500){
                    echo "<br><p>You passed.</p>";
                }
                else if($_SESSION['mark']==600 or $_SESSION['mark']==700){
                    echo "<br><p>You passed. Great.</p>";
                }
                else if($_SESSION['mark']==800 or $_SESSION['mark']==900){
                    echo "<br><p>You passed. Great Great.</p>";
                }
                else{
                    echo "<br><p>You passed. Great Great Winner.</p>";
                }
                
                echo "<br><a href=index.php><button name=home id=home>Home</button></a></div><br><br></div>";
            }
            
        
                // $val_l=$_POST['continue'];
                // unset($val_l);   
        
        // if(isset($_POST['continue'])) { 
        //     $_SESSION['count']++;
        // } 
        
    ?>
    <div id="myplace">
    
    </div>
    </div>
</div>


<script src="dist/js/lp.js"></script>
<?php include "footer.php";?>