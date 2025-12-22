fetch('texto.json')
.then(r => r.json())
.then(data => {
    const conteudo = document.getElementById('conteudo');
    if (conteudo) {
        conteudo.innerText = data.texto;
    }
})
.catch(error => {
    console.error('Erro ao carregar a mensagem:', error);
    document.getElementById('conteudo').innerText = 'Não foi possível carregar a mensagem. Tente novamente mais tarde.';
});
