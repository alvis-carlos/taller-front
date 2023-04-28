	
window.onload = init;
    function init(){
        document.querySelectorAll(".desplegable")[0].addEventListener("click",submenu);
        document.querySelector(".desplegable ul").style.display = "none";
    }
    
    function submenu(){
        var estado = document.querySelector(".desplegable ul").style.display;
        if (estado == "none"){
            document.querySelector(".desplegable ul").style.display = "block";
        }
        else{
            document.querySelector(".desplegable ul").style.display = "none";         
        };
    }
    <script type="text/javascript">
        window.addEventListener("scroll",function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });
    </script>