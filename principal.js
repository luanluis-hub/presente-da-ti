fetch('principal.json')
.then(r => r.json())
.then(data => {
    const conteudo = document.getElementById('conteudo-principal');
    if (conteudo) {
        conteudo.innerText = data.textoPrincipal;
    }
})
.catch(error => {
    console.error('Erro ao carregar a mensagem principal:', error);
});