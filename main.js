menu_list_array = ["Margerata Pizza","Farm House Pizza","Paneer Pizza","Loaded Vegie Pizza"];

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menu'>" ;
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata + '<li>'+ menu_list_array[i] + '</li>'
    }
    htmldata = htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function additem(){
    var htmldata;
    var item=document.getElementById("add_item").nodeValue;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='card'>";
    for(var 1=0;1<menu_list_array.length; 1++ ){
        htmldata = htmldata+
    }
    htmldata = htmldata + '</section>'
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}