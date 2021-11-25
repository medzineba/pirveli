const parent = document.getElementById("parent");

document.addEventListener('mousemove', (evt) => {
    if(evt.clientX > window.innerWidth) return;
    if(evt.clientY > window.innerHeight) return;
    if(evt.clientX < 0) return;
    if(evt.clientY < 0) return;
    parent.style.top = evt.clientY - 250 + 'px';
    parent.style.left = evt.clientX - 250 + 'px';
})

for(let i = 0; i < 64; i++) {
    let row = (i / 8) << 0;
    const div = document.createElement("div");
    if(i % 2 === 1) {
        
        if(row & 1) {
            div.classList.add("black");
        } else {
            div.classList.add("white");
        }
    } else {
        if(row & 1) {
            div.classList.add("white");
        } else {
            div.classList.add("black");
        }
    }
    
    parent.appendChild(div);
}