
// window.open ("yourPageURL","mywindow","status=1,toolbar=0");

// window.onbeforeunload = function() {
//   return "you can not refresh the page";
// }
// $(document).ready(function(){
//   $('#continue').click(function(){
//       var clickBtnValue = $(this).val();
//       var ajaxurl = 'question.php',
//       data =  {'action': clickBtnValue};
//       $.post(ajaxurl, data, function (response) {
//           // Response div goes here.
//           alert("action performed successfully");
//       });
//   });
// });

function disableF5(e) { if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault(); };
$(document).ready(function(){
  $(document).on("keydown", disableF5);
});

var d_sound = document.getElementById("default_Audio");
var r_sound = document.getElementById("right_Audio");
var f_sound = document.getElementById("false_Audio");
var t_sound = document.getElementById("time_Audio");
var timeleft = 19;
var downloadTimer = setInterval(function(){
  if(timeleft <= -1){
    clearInterval(downloadTimer);
    t_sound.play();
    document.getElementById("countdown").innerHTML = "Time is Out!!!";
    var reg_to=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_to>အချိန်ပြည့်ပါပြီ။</p><a href=index.php><button name=home id=home>Home</button></a></div></div>");
                    document.getElementById("myplace").innerHTML=reg_to;
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid  #f7b733',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " s";
  }
  timeleft -= 1;
}, 1000);

$("#loop_num").css({
    "display":"inline"
});


var ajax=new XMLHttpRequest();
    var method="GET";
    var url="includes/carry.php";
    var asynchronous=true;

    ajax.open(method,url,asynchronous);
    ajax.send();

    ajax.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            var data= JSON.parse(this.responseText);
            

            
            var ran=$('#suff_num').html();
            var a=ran-1;

            var qid_dis=data[a].qid;
            var cate_dis=data[a].category;
            var ques_dis=data[a].question;
            var op1_dis=data[a].op_one;
            var op2_dis=data[a].op_two;
            var op3_dis=data[a].op_three;
            var op4_dis=data[a].op_four;
            var ans_dis=data[a].answer;
            var expl_dis=data[a].expl_a;
            var btn1_val=$("#btn1").html();
            var btn2_val=$("#btn2").html();
            var btn3_val=$("#btn3").html();
            var btn4_val=$("#btn4").html();
            var count_num=$("#cnum").html();
            /*button1 functions start here 
            ၊
            ၊  
            ၊
            ၊
            ၊
            ၊
            ၊_______________________________________________*/

            $('#btn1').click(function () {
              // $('#myform').css({
              //     'display':'block'
              // });
              clearInterval(downloadTimer);
                if(btn1_val==ans_dis){
                  r_sound.play();
                    var reg_true=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_t>သင့်အဖြေမှန်ကန်ပါသည်။<br>သင် အမှတ် ၁၀၀ ရရှိပါသည်။<br>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_r type=submit id=continue_r>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_true;
                    $('#continue').click(function(){

                      // if(count_num=="9"){
                      //     location.replace("testing.php");
                      // }
                      // location.replace("question.php");
                    });
                    // $('#btn1').css({
                    //     'background':'green',
                    //     'color':'white'
                    // });
                    
                    
                    $('.modal').css( {
                        'color':'black',
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                    $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(30,170,203)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
                else{
                  clearInterval(downloadTimer);
                  f_sound.play();
                    var reg_false=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_f>သင့်အဖြေမှားယွင်းပါသည်။<br>အဖြေမှန်မှာ "+ans_dis+" ဖြစ်ပါသည်။</p><p id=expl1>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_w type=submit id=continue_w>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_false;
                    $('#continue').click(function(){
                      // if(count_num=="9"){
                      //   location.replace("testing.php");
                      // }
                      // location.replace("question.php");
                    });
                    // $('#btn1').css({
                    //     'background':'red',
                    //     'color':'white'
                    // });
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(246,79,89)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
            });
            /*button2 functions start here 
            ၊
            ၊  
            ၊
            ၊
            ၊
            ၊
            ၊_______________________________________________*/
            $('#btn2').click(function() {
              clearInterval(downloadTimer);
                if(btn2_val==ans_dis){
                  r_sound.play();
                    var reg_true=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_t>သင့်အဖြေမှန်ကန်ပါသည်။<br>သင် အမှတ် ၁၀၀ ရရှိပါသည်။<br>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_r type=submit id=continue_r>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_true;
                    $('#continue').click(function(){
                      location.replace("question.php");
                    });
                    // $('#btn2').css({
                    //     'background':'green',
                    //     'color':'white'
                    // });
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(30,170,203)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
                else{
                  clearInterval(downloadTimer);
                  f_sound.play();
                    var reg_false=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_f>သင့်အဖြေမှားယွင်းပါသည်။<br>အဖြေမှန်မှာ "+ans_dis+" ဖြစ်ပါသည်။</p><p id=expl1>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_w type=submit id=continue_w>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_false;
                    $('#continue').click(function(){
                      location.replace("question.php");
                    });
                    // $('#btn2').css({
                    //     'background':'red',
                    //     'color':'white'
                    // });
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(246,79,89)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
            });
            /*button3 functions start here 
            ၊
            ၊  
            ၊
            ၊
            ၊
            ၊
            ၊_______________________________________________*/
            $('#btn3').click(function() {
              clearInterval(downloadTimer);
              
                if(btn3_val==ans_dis){
                  r_sound.play();
                    var reg_true=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_t>သင့်အဖြေမှန်ကန်ပါသည်။<br>သင် အမှတ် ၁၀၀ ရရှိပါသည်။<br>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_r type=submit id=continue_r>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_true;
                    $('#continue').click(function(){
                      location.replace("question.php");
                    });
                    // $('#btn3').css({
                    //     'background':'green',
                    //     'color':'white'
                    // });
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(30,170,203)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
                else{
                  clearInterval(downloadTimer);
                  f_sound.play();
                    var reg_false=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_f>သင့်အဖြေမှားယွင်းပါသည်။<br>အဖြေမှန်မှာ "+ans_dis+" ဖြစ်ပါသည်။</p><p id=expl1>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_w type=submit id=continue_w>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_false;
                    $('#continue').click(function(){
                      location.replace("question.php");
                    });
                    // $('#btn3').css({
                    //     'background':'red',
                    //     'color':'white'
                    // });
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(246,79,89)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
            });
            /*button4 functions start here 
            ၊
            ၊  
            ၊
            ၊
            ၊
            ၊
            ၊_______________________________________________*/
            $('#btn4').click(function() {
              clearInterval(downloadTimer);
                if(btn4_val==ans_dis){
                  r_sound.play();
                    var reg_true=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_t>သင့်အဖြေမှန်ကန်ပါသည်။<br>သင် အမှတ် ၁၀၀ ရရှိပါသည်။<br>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_r type=submit id=continue_r>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_true;
                    $('#continue').click(function(){
                      location.replace("question.php");
                    });
                    // $('#btn4').css({
                    //     'background':'green',
                    //     'color':'white'
                    // });
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(30,170,203)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
                else{
                  clearInterval(downloadTimer);
                  f_sound.play();
                    var reg_false=("<div id=myModal class=modal><div class=modal-content><span class=close>&times;</span><br><p id=expl_f>သင့်အဖြေမှားယွင်းပါသည်။<br>အဖြေမှန်မှာ "+ans_dis+" ဖြစ်ပါသည်။</p><p id=expl1>"+expl_dis+"</p><form method=post id=myform><a href=question.php><button name=continue_w type=submit id=continue_w>Continue</button></a></form></div></div>");
                    document.getElementById("myplace").innerHTML=reg_false;
                    $('#continue').click(function(){
                      location.replace("question.php");
                    });
                    // $('#btn4').css({
                    //     'background':'red',
                    //     'color':'white'
                    // });
                    $('.modal').css( {
                        'display': 'block',
                        'position': 'fixed', 
                        'z-index': '1',
                        'padding-top': '100px',
                        'left': '0',
                        'top': '0',
                        'width': '100%', 
                        'height': '100%', 
                        'overflow': 'auto',
                        'background-color': 'rgb(0,0,0)', 
                        'background-color': 'rgba(0,0,0,0.4)'
                      });
                      $('.modal-content').css( {
                        'background-color': '#e5edf2',
                        'margin': 'auto',
                        'padding': '20px',
                        'border': '6px solid rgb(246,79,89)',
                        'width': '50%',
                        'border-radius':'10px'
                         });
                    $('.close').css( {
                        'color': '#aaaaaa',
                        'float': 'right',
                        'font-size': '28px',
                        'font-weight': 'bold'
                      });
                      
                      $('.close').hover(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                      $('.close').focus(function(){
                    $(this).css({'color': '#000',
                        'text-decoration': 'none',
                        'cursor': 'pointer'})
                    });
                    $('.close').on('click', function(){
                        $('.modal').css({'display':'none'});
                    })
                    // var modal = document.getElementById("myModal");
                    // window.onclick = function(event) {
                    //     if (event.target == modal) {
                    //         modal.style.display = "none";}
                    // }
                }
            });
        }
    }
