var pokemon = document.getElementById('pokemon');
var botao = document.getElementById('btn');
var ataques = document.getElementById('atacks');
var imagem = document.getElementById('imagem');
var tipoPokemon = document.getElementById('tipoPoke');


var http = new XMLHttpRequest();

function buscar() {
    var text = pokemon.value;

    var url = "https://pokeapi.co/api/v2/pokemon/" + text.trim().toLowerCase();

    http.open('get', url, true);

    http.send();
    http.onreadystatechange = function() {
        if (http.status == 200) {

            ataques.innerHTML = null;

            var resposta = JSON.parse(http.response);

            var num = 1;
            resposta.abilities.forEach(element => {
                let item = document.createElement('p');
                item.innerHTML = num + "-" + element.ability.name;
                ataques.appendChild(item);
                num++;
            });
            num = 1;


            imagem.innerHTML = null;
            if (resposta.sprites.front_shiny != null) {
                let item = document.createElement('img');
                let item1 = document.createElement('img');
                item.src = resposta.sprites.front_shiny;
                item1.src = resposta.sprites.back_shiny;

                imagem.appendChild(item);
                imagem.appendChild(item1);
            } else {
                let item = document.createElement('p');
                item.innerHTML = "Não existe imagem desse pokemon";
                imagem.appendChild(item);
            }


            tipoPokemon.innerHTML = null;
            resposta.types.forEach(element => {
                let tipo = document.createElement('td');

                tipo.innerHTML = element.type.name;

                tipoPokemon.appendChild(tipo);
            })

            info.innerHTML = null

            let height = document.createElement('p');

            height.innerHTML = "ID:" + resposta.weight;
            info.appendChild(height);

            document.getElementById('nomePoke').innerHTML = resposta.name;


        } else {
            alert("Ocorreu um erro na requisição!!!");
        }
    }
}