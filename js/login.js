$(document).ready(function(){
    var ifLogged = false
    var clicked = 0;
    let profIcon = $('#profile');
    if (!ifLogged) showSubmenu();
    function showSubmenu() {
        function stopDefAction(evt) {
            evt.preventDefault();
        }
        profIcon.on('click', stopDefAction, false);

        profIcon.on('click',function () {
            if (clicked == 0) {
                $('#sub_menu').slideDown(500);
                clicked = 1;

            } else {
                $('#sub_menu').slideUp(500);
                clicked = 0;
            }
         });
    }
// contact button
    let placementDiv = document.getElementsByTagName('body')[0];
    console.log(placementDiv.dataset);
    //add data-nobutton="1" in body to hide
    if (placementDiv.dataset.nobutton !== "1"
        && !( document.URL.includes("game_play"))
        && !( document.URL.includes("contactus")))
    {
        var newButton = document.createElement('a');
        newButton.setAttribute("id","buttonCode");
        newButton.setAttribute("href","contactus.html");
        newButton.innerHTML = "<span>Have a problem?</span>"
        placementDiv.prepend(newButton);
    }
})