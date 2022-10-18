let contJ = 0;
let contC = 0;
let cont = 0;
let juego = true;
let jugador;
let cpu;


while (juego == true) {
    
    jugador = function () {
        let opJ = prompt("Piedra \nTijera \nPapel \nPor favor, elija una opcion");
        
        switch (opJ) {
            case 'Piedra':
                jug = 1;
                break;
            
            case 'Tijera':
                jug = 2;
                break
            
            case 'Papel':
                jug = 3;
                break
            
        }
        return jug;
    }

    cpu = function () {
      let cpuOP = Math.floor(Math.random() * 3 + 1);
        
        return cpuOP
    }

        let opC = cpu();
        let op = jugador();
        
         if (op == opC) {
    
            alert("Empate");
            cont = cont + 1;
            document.write("Ronda: "+cont+"<br>Jugador: " + contJ + " - CPU: " + contC+"<br>");

        } else if (op == 1 && opC == 2 || op == 2 && opC == 3 || op == 3 && opC == 1) {
            alert("Jugador Gana");
            contJ = contJ + 1;
            cont = cont + 1;
            document.write("Ronda: "+cont+"<br>Jugador: " + contJ + " - CPU: " + contC+"<br>");

        } else if (op == 3 && opC == 2 || op == 1 && opC == 3 || op == 2 && opC == 1) {
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



    

