
//Creates a popup, asks the user to confirm, and then deletes card if true
function confirmDelete(el) {
    var x = confirm("Are you sure you want to delete?");
    if (x)
        el.parentNode.parentNode.style.display = 'none';
}

//Highlights card if the user presses the like button
function like(el) {
    el.parentNode.parentNode.classList.toggle("highlight");
}

//Creats a share popup, with title of card
function popup(parent) {
    var popup = document.getElementById("myPopup")
    popup.style.display = "block"
    var title = parent.children[1].innerText
    popup.children[0].children[1].innerHTML = "Would you like to share " + title + "?"
}

//closes the share popup if the user clicks off the page or clicks the close button
function closePopup() {
    var popup = document.getElementById("myPopup")
    popup.style.display = "none"
}


// When the user clicks on the button, switch between hiding and showing the dropdown content
function myDropdown(el) {
    var dropdown = el.children[1]
    dropdown.classList.toggle("show");
}

//archives the main box, main is the main box element
function archive(main) {
    var title = main.children[0].children[0].innerText
    //confirms if the user wants to archive
    var x = confirm("Are you sure you want to archive " + title + "?");
    if (x) {
        //Hides the main box selected
        main.classList.add("hide");
        //Total main boxes
        var numTotal = main.parentElement.childElementCount - 1;
        //Main boxes hidden
        var numHidden = main.parentElement.getElementsByClassName("hide").length;
        //the new width (-2.5 so that the boxes fit on one line)
        var myWidth = 100 / (numTotal - numHidden) - 2.5;
        //applies the new width to all of the main box elements
        for (var i = 0; i < main.parentElement.childElementCount - 1; i++) {
            main.parentElement.children[i].style.width = myWidth + "%";
        }

    }

}