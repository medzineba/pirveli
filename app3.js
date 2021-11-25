const kacuna = document.querySelector("#kacuna");
const gemma = document.querySelector("#gemma");
const movementSpeed = 5;
const jumpHeight = 10;
document.addEventListener("keydown", ev => {
    let val;
    if(ev.code === "ArrowRight") {
        val = Number(window.getComputedStyle(kacuna).left.replace('px', ''));
        if(kacuna.getClientRects()[0].right + movementSpeed > gemma.getClientRects()[0].right) return;
        kacuna.style.left = `${val + movementSpeed}px`;
        kacuna.transform = 'scaleX(1)';
        kacuna.classList.remove('left');
        kacuna.classList.add('right');
    }
    if(ev.code === "ArrowLeft") {
        val = Number(window.getComputedStyle(kacuna).left.replace('px', ''));
        if(val - movementSpeed < 0) return;
        kacuna.style.left = `${val - movementSpeed}px`;
        kacuna.classList.remove('right');
        kacuna.classList.add('left');

    }
    if(ev.code === "ArrowUp") {
        let counter = 20;
        let isMinus = false;
        let height = 0;
        const interval = setInterval(() => {
            counter--;
            kacuna.style.bottom = `${height += isMinus ? -jumpHeight: jumpHeight}px`;
            if(counter === 0) {
                clearInterval(interval)
                return;
            } 
            if(counter === 10) { 
                isMinus = true;
                 return;
            };
        }, 1000/60)
    }
})
 