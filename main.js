var MLA= [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extrvagansa Pizza"
];

function getmenu()
{
    var htmldata;

    htmldata="<ol class='menulist'>";
    MLA.sort();
    
    for(var i=0; i<MLA.length;i++){
        htmldata=htmldata+"<li>"+MLA[i]+"</li>";
    }

    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item()
    {
        var htmldata2;
        var item= document.getElementById("add_item").value;
        MLA.push(item);
        MLA.sort();
        htmldata2="<section class='cards'>";
        for (var j=0;j<MLA;j++)
        {
            htmldata2=htmldata2+"<div class='cards'>"+"<img src='pizzaImg.png>"+MLA[j]+"</div>";
        }
        htmldata2=htmldata2+"</section>";
        document.getElementById("display_addedmenu").innerHTML=htmldata2;
    }
