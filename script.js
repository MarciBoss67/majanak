function igenValasz() {

    document.getElementById("kerdes-doboz").style.display = "none";
    
    document.getElementById("valasz-doboz").style.display = "block";
    
    document.body.style.backgroundColor = "#ffcccc";
}

function nemValasz() {
    alert("Hoppá! Ez a gomb nem működik... Próbáld a másikat! 😉");
}

function igenValasz() {
    
    document.getElementById("kerdes-doboz").style.display = "none";
    document.getElementById("valasz-doboz").style.display = "block";
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            let sziv = document.createElement("div");
            sziv.innerHTML = "❤️";
            sziv.classList.add("sziv-effekt");
            
            sziv.style.left = Math.random() * 100 + "vw";
            sziv.style.animationDuration = (Math.random() * 2 + 3) + "s";
            sziv.style.fontSize = (Math.random() * 20 + 10) + "px";
            
            document.body.appendChild(sziv);

            setTimeout(() => {
                sziv.remove();
            }, 5000);
        }, i * 100);
    }
}

function igenValasz() {
    document.getElementById("kerdes-doboz").style.display = "none";
    document.getElementById("valasz-doboz").style.display = "block";

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            let elem = document.createElement("div");
            elem.classList.add("sziv-effekt");
            
            if (Math.random() > 0.3) {
                elem.innerHTML = "❤️";
                elem.style.fontSize = (Math.random() * 20 + 15) + "px";
            } else {
                let miniStitch = document.createElement("img");
                miniStitch.src = "stitch.png";
                elem.appendChild(miniStitch);
            }

            elem.style.left = Math.random() * 100 + "vw";
            elem.style.animationDuration = (Math.random() * 2 + 3) + "s";
            document.body.appendChild(elem);

            setTimeout(() => { elem.remove(); }, 5000);
        }, i * 150);
    }
}