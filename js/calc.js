$(function(){
if($(".a").text()== ""){
 $(".oper").addClass("click")

}else{
    
}

$(".del").on("click",function(){
    let text_slice = $(".a").text().slice(0,$(".a").text().length -1)
    
    $(".a").text(text_slice)
    $(".b").text($(".a").text())
    if($(".a").text()==""||$(".a").text().endsWith("+")||$(".a").text().endsWith("*")||$(".a").text().endsWith("-")||$(".a").text().endsWith("/")){
        $(".oper").addClass("click")
    }else{
        $(".oper").removeClass("click")
    }
    
})
$(".clear").on("click",function(){
    $(".a").text("")
    $(".b").text("") 
    $(".oper").addClass("click")
})
let show  = false;
$(".sum").click(function(){
    if($(".a").text().endsWith("+")||$(".a").text().endsWith("*")||$(".a").text().endsWith("-")||$(".a").text().endsWith("/")){

    }else if($(".a").text().endsWith("/0") || $(".a").text().endsWith("/0.") ){
        $(".alert-massge").fadeIn().delay(4000).fadeOut()
       } else{
        show  = true
        $(".a").text(eval($(".a").text()))
        $(".b").text("")
        $(".dot").removeClass("click") 
    }
})


$(".calc button").on("click",function(){
    
    let text =  $(".a").text();
    let btnText=$(this).text();
    if(show == false){
        $(".a").text(text + btnText);
    }
    if($(".a").text() == ""){
        $(".oper").addClass("click")
    }else if($(this).hasClass("dot")){
        $(this).addClass("click")


        if(show == true){
            $(".a").text("0"+$(this).text());
          
            show = false

            }else{
             $(".a").text(text + btnText);
            }
    
      } else if($(this).hasClass("num")){
          $(".oper").removeClass("click")
                              if(show == true){
                              $(".a").text($(this).text());
                              show = false

                              }else{
                               $(".a").text(text + btnText);
                              }
          
      }else if($(this).hasClass("oper")){
        $(".a").text(text + btnText);
        $(".oper").addClass("click")
          $(".dot").removeClass("click")
          show = false
      }

      if($(".a").text().endsWith("/0")|| $(".a").text().endsWith("/0.")||$(".a").text().endsWith("+")||$(".a").text().endsWith("*")||$(".a").text().endsWith("-")||$(".a").text().endsWith("/")){

      }
      else{
        $(".b").text(eval($(".a").text()))  
      }
})




})
