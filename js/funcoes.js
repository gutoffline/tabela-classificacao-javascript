let guilherme = {
    nome:"Guilherme",
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0
}

let julia = {
    nome: "Julia",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}



guilherme.pontos = CalculaPontos(guilherme);
julia.pontos = CalculaPontos(julia);

function CalculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

let jogadores = [guilherme , julia];
ExibirJogadoresNaTela(jogadores);

function ExibirJogadoresNaTela(jogadores){
    let html = "";
    for(let i = 0 ; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onclick='AdicionarVitoria("+ i + ")'>Vitória</button></td>";
        html += "<td><button onclick='AdicionarEmpate(" + i + ")'>Empate</button></td>";
        html += "<td><button onclick='AdicionarDerrota("+ i +")'>Derrota</button></td>";
        html += "</tr>";
    }

    let tabelaJogadores = document.querySelector("#tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

function AdicionarVitoria(i){
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = CalculaPontos(jogador);
    ExibirJogadoresNaTela(jogadores);
}

function AdicionarEmpate(i){
    let jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = CalculaPontos(jogador);
    ExibirJogadoresNaTela(jogadores);
}

function AdicionarDerrota(i){
    let jogador = jogadores[i];
    jogador.derrotas++;
    ExibirJogadoresNaTela(jogadores);
}