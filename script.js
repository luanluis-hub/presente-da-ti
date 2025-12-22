const bolinhas = 40;
for (let i = 0; i < bolinhas; i++) {
    const b = document.createElement('div');
    b.classList.add('bolinhas');
    document.body.appendChild(b);

    if (i < 10) { b.style.top = '0'; b.style.left = (i * 10) + '%'; }
    else if (i < 20) { b.style.top = (i - 10) * 10 + '%'; b.style.left = '95%'; }
    else if (i < 30) { b.style.bottom = '0'; b.style.left = (100 - (i - 20) * 10) + '%'; }
    else { b.style.top = (100 - (i - 30) * 10) + '%'; b.style.left = '0'; }

    b.style.animationDelay = (Math.random() * 1.5) + 's';
}
