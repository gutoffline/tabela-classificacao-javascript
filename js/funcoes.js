let guilherme = {
    nome:"Guilherme",
    vitorias:2,
    empates:1,
    derrotas:1,
    pontos:7
}

let julia = {
    nome: "Julia",
    vitorias: 3,
    empates: 4,
    derrotas: 2,
    pontos: 7
}

guilherme.pontos = CalculaPontos(guilherme);
julia.pontos = CalculaPontos(julia);

function CalculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}