function hintergrund_blau() {
    document.body.style.backgroundColor = "rgb(200,255,200)";
}
function hintergrund_grau() {
    document.body.style.backgroundColor = "rgb(240,240,240)";
}

function neuerText() {
    document.getElementById("id1").innerHTML = "Cool! Ein neuer Text!";
}

function nachricht(){  
    alert("Achtung ein Hinweis!");  
   }  

function zeigeMessi() {
    document.getElementById("spielerbild").src="img/messi.jpg";
}

function zeigeRonaldo() {
    document.getElementById("spielerbild").src="img/ronaldo.jpg";
}

function neuerKanal() {
    var tabelle = document.getElementById("yt_tabelle");
    var neue_zelle = tabelle.insertRow().insertCell(0);
    var neuer_kanal = document.getElementById("kanalname").value;
    neue_zelle.innerHTML = neuer_kanal;
}


/* 
 * Lösung Aufgabe 1
*/
function gruenMachen() {
    // TODO: Hier muss der JavaScript Befehl stehen, der den Hintergrung des Paragraphs grün setzt.
    document.getElementById("greenParagraph").style.background = "green";
}

/* 
 * Lösung Aufgabe 2
*/
function zeigeAntwort2() {
    // Der JavaScript Befehl sorgt dafür, dass das Element mit der ID "antwort2" angezeigt wird.
    document.getElementById("antwort2").style.display="block";
}

/* 
 * Lösung Aufgabe 3
*/
function zeigeAntwort3() {
    // TODO: Hier müssen die JavaScript Befehle stehen, die dafür sorgen dass die Antwort angezeigt wird und der Button nicht mehr angezeigt wird..
    document.getElementById("buttonFrage3").style.display = "none";
    document.getElementById("antwort3").style.display="block";
}

/* 
 * Lösung Aufgabe 4
*/
function zeigeAntwort4() {
    // TODO: Hier soll eine JavaScript-Verzweigung (if-else) dafür sorgen, dass je nachdem welcher Text auf dem Button steht,  die Antwort angezeigt wird oder verborgen wird.
    // Achtung: Mit == VERGLEICHT man; mit = SETZT man den linken Wert auf den rechten Wert.
    if (document.getElementById('buttonFrage4').innerHTML == "Antwort zeigen") {
        document.getElementById("antwort4").style.display="block";
        
    } else {
        document.getElementById("antwort4").style.display="none";
        
    }
}
