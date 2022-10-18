let contJ = 0;
let contC = 0;
let cont = 0;
    
juego = true;


while (juego == true) {

        let jugador = parseInt(prompt("1 = Piedra \n2 = Tijera \n3 = Papel \nPor favor, digite un numero"));

        let cpu = Math.floor(Math.random() * 3 + 1);

        if (jugador == cpu) {
    
            alert("Empate");
            cont = cont + 1;
            document.write("Ronda: "+cont+"<br>Jugador: " + contJ + " - CPU: " + contC+"<br>");

        } else if (jugador == 1 && cpu == 2 || jugador == 2 && cpu == 3 || jugador == 3 && cpu == 1) {
            alert("Jugador Gana");
            contJ = contJ + 1;
            cont = cont + 1;
            document.write("Ronda: "+cont+"<br>Jugador: " + contJ + " - CPU: " + contC+"<br>");

        } else if (jugador == 3 && cpu == 2 || jugador == 1 && cpu == 3 || jugador == 2 && cpu == 1) {
            alert("CPU Gana");
            contC = contC + 1;
            cont = cont + 1;

              document.write("Ronda: "+cont+"<br>Jugador: " + contJ + " - CPU: " + contC+"<br>");
         
        } else {
            alert("ERROR");
             document.write("Jugador: " + contJ + " - CPU: " + contC+"<br>");
    }

    if (contJ == 3) {
        document.write("<br>El jugador gana la partida");
    } else if(contC == 3){
        document.write("<br>La cpu gana la partida");
    }
    
        
    if (contJ == 3 || contC == 3) {
        juego = false
        alert("Fin del Juego")
   }

}