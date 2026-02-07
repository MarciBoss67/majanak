function nemValasz() {
    alert("Hoppá! Ez a gomb nem működik... Próbáld a másikat! 😉");
}

function igenValasz() {
    const kerdes = document.getElementById("kerdes-doboz");
    const valasz = document.getElementById("valasz-doboz");

    // 1. Kérdés elhalványítása animációval
    kerdes.classList.add("elhalvanyul");

    setTimeout(() => {
        // 2. Kérdés törlése, háttérszín módosítása és válasz előkészítése
        kerdes.style.display = "none";
        document.body.style.backgroundColor = "#ffcccc"; // Rózsaszínebb háttér
        valasz.style.display = "block"; 
        
        setTimeout(() => {
            // 3. Válasz beúsztatása
            valasz.classList.add("lathato");

            // 4. Szív és saját kép (Stitch) effekt indítása
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    let elem = document.createElement("div");
                    elem.classList.add("sziv-effekt");
                    
                    // Véletlenszerűen szív (70%) vagy kép (30%)
                    if (Math.random() > 0.3) {
                        elem.innerHTML = "❤️";
                        elem.style.fontSize = (Math.random() * 20 + 15) + "px";
                    } else {
                        let miniKep = document.createElement("img");
                        // Itt ellenőrizd, hogy a kép neve pontosan ez-e a GitHubon!
                        miniKep.src = "stitch.png"; 
                        miniKep.style.width = "40px"; // Biztonsági méret beállítás
                        elem.appendChild(miniKep);
                    }

                    elem.style.left = Math.random() * 100 + "vw";
                    elem.style.animationDuration = (Math.random() * 2 + 3) + "s";
                    document.body.appendChild(elem);

                    // Elemek törlése, miután leestek, hogy ne lassítsák a telefont
                    setTimeout(() => { elem.remove(); }, 5000);
                }, i * 150);
            }

        }, 50); // Rövid szünet a display váltás után
    }, 600); // Megvárjuk, amíg a kérdés elhalványul
}