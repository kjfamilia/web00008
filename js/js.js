setInterval(colorea, 1000);
   let color = "rojo";
function colorea() {
 
    switch (color) {
        case "rojo":
            // darkgray
            document.getElementById("luzRojo").style.background="red";
            document.getElementById("luzVerde").style.background="darkgray";
            color = "amarillo";
            break;
            case "amarillo":  
            document.getElementById("luzRojo").style.background="darkgray";
            document.getElementById("luzAmarillo").style.background="yellow";
            color = "verde";
            break;
            case "verde":          
            document.getElementById("luzAmarillo").style.background="darkgray";
            document.getElementById("luzVerde").style.background="green";
            color = "rojo";
        default:
            break;
    }
}