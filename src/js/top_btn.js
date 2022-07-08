const bodyEl = document.body || document.getElementsByTagName('body')[0];

bodyEl.insertAdjacentHTML('beforeend', '<button onclick="topFunction()" id="toTop" title="Go to top">Наверх</button>');


document.getElementById('toTop').setAttribute("style", "display: none; position: fixed;font-family: 'Roboto Mono', monospace;bottom: 18px; right: 18px; z-index: 1000; border: none; outline: none; background: #00B2FF; padding: 10px; color:white; cursor: pointer");


document.documentElement.setAttribute("style", "scroll-behavior: smooth;");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    const btnGet = document.getElementById("toTop");
   
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480){
        btnGet.style.display = "block";
    } else {
        btnGet.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}