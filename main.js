menu = ["Veggie Supreme Pizza", "Plain Cheese Pizza", "Hawaiian Pizza", "Pepperoni Pizza", "Paneer Tikka Pizza", "Veggie Deluxe Pizza"]

function getmenu(){
    var htmldata;
    htmldata = "<ol class = 'menulist'>"
    menu.sort();
    for(var i = 0; i < menu.length;i++){
        htmldata += "<li>" + menu[i] + "</li>"
    }
    htmldata += "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu.push(item)

    menu.sort();
    htmldata = "<section class = 'cards'>"
    for(var i = 0; i < menu.length; i++){
        htmldata += "<div class = 'card'>" + "<img src = 'images/pizzaImg.png'>" + menu[i] + "</div>"
    }

    htmldata += "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}
