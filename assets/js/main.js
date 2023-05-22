const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

const mensagem = 'Sabia que você queria, também te amo <3';

function gerarPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

function mudarPosicao(btn) {
    nao.style.position = 'absolute';
    nao.style.top = gerarPosicao(10, 80);
    nao.style.left = gerarPosicao(10, 80);
}

sim.onclick = function () {
    document.querySelector('.resposta').textContent = mensagem;
}

nao.onclick = function () {
    mudarPosicao();
}

nao.onmouseover = function () {
    mudarPosicao();
}
