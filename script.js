function igenValasz() {
    // 1. Megkeressük a kérdés dobozt és eltüntetjük
    document.getElementById("kerdes-doboz").style.display = "none";
    
    // 2. Megkeressük a válasz dobozt és megjelenítjük
    document.getElementById("valasz-doboz").style.display = "block";
    
    // Opcionális: Konfetti vagy háttérszín változtatás
    document.body.style.backgroundColor = "#ffcccc"; // Kicsit sötétebb rózsaszín lesz a háttér
}

function nemValasz() {
    // Ide írhatsz vicces dolgot, ha a NEM-re nyom.
    // Most csak egy felugró ablakot rakok be:
    alert("Hoppá! Ez a gomb nem működik... Próbáld a másikat! 😉");
}