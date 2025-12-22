fetch('secreto.json')
.then(r => r.json())
.then(data => {
    const conteudo = document.getElementById('conteudo-secreto');
    if (conteudo) {
        conteudo.innerText = data.textoSecreto;
    }
})
.catch(error => {
    console.error('Erro ao carregar a mensagem secreta:', error);
    document.getElementById('conteudo-secreto').innerText = 'Não foi possível carregar a mensagem secreta.';
});