window.addEventListener('load', function(){
    const content_toggle = document.getElementsByClassName("toggle_me");
    const button_toggle = document.getElementById("button");

    button_toggle.addEventListener('click', function(){
        Array.from(content_toggle).forEach((elements) => {
            if(elements.style.display == 'flex') {
                elements.style.display = 'none'
            }else{
                elements.style.display = 'flex'
            }
        });
    });
});