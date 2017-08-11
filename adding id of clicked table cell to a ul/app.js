window.onload = function(){
    document.getElementById('tableID').onclick = function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var table =  document.getElementById('tableID');
        var cells = table.getElementsByTagName("td"); 
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        
        if(target.tagName.toLowerCase() ==  "td") {
            //alert(target.innerHTML);
            li.innerHTML=target.id;
            ul.appendChild(li);
        }
    };
};