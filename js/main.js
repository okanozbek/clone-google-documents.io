feather.replace({ class: 'text-file', 'stroke-width': 1})
        var menu = false;
        var clicked = false;
        $(document).ready(function (){
            $('ul li').hover(function(){
                if(menu){
                    menu = true;
                    $(this).children().toggle();
                }else{
                }
            });
            $("ul li").click(function() {
               if(menu){
                menu = false;
                $(this).children().hide();
                }else{
                    menu = true;
                    $("ul li").children().hide();
                     $(this).children().toggle(function(){

                     });
                }
            });
            $('#doc-logo').click(function(){
                $('#doc-menu').stop().slideToggle("slow");
            });
            
        });

    function openTab(cityName,elmnt,color) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
      document.getElementById(cityName).style.display = "block";
      elmnt.style.backgroundColor = color;
    
    }

    document.getElementById("defaultOpen").click();


    function openTab(cityName,elmnt,color) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
      document.getElementById(cityName).style.display = "block";
      elmnt.style.backgroundColor = color;
    
    }

    document.getElementById("defaultOpen").click();

function textbox()
{
        var ctl = document.getElementById('');
        var startPos = ctl.selectionStart;
        var endPos = ctl.selectionEnd;
        alert(startPos + ", " + endPos);
}