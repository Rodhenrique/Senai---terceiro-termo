function buscar() {
    let info = document.getElementById('info');
    let text = document.getElementById('texto').value;
    let imagem = document.getElementById('imagem');
    let tipoPokemon = document.getElementById('tipoPoke');

    const url = 'https://pokeapi.co/api/v2/pokemon/' + text.trim().toLowerCase() + '';
    fetch(url, {
            method: 'get' //método  http para tipo de acesso //delete //post // put
        })
        .then(function(response) {
            response.text()
                .then(function(result) {
                    var jsonResposta = JSON.parse(result)
                    var num = 1;
                    jsonResposta.abilities.forEach(element => {
                        let item = document.createElement('p');
                        item.innerHTML = num + "-" + element.ability.name;
                        info.appendChild(item);
                        num++;
                    });
                    num = 1;

                    imagem.innerHTML = null;
                    if (jsonResposta.sprites.front_shiny != null) {
                        let item = document.createElement('img');
                        let item1 = document.createElement('img');
                        item.src = jsonResposta.sprites.front_shiny;
                        item1.src = jsonResposta.sprites.back_shiny;
                        imagem.appendChild(item);
                        imagem.appendChild(item1);
                    } else {
                        let item = document.createElement('p');
                        item.innerHTML = "Não existe imagem desse pokemon";
                        imagem.appendChild(item);
                    }
                    tipoPokemon.innerHTML = null;
                    jsonResposta.types.forEach(element => {
                        let tipo = document.createElement('t');
                        tipo.innerHTML = element.type.name;
                        tipoPokemon.appendChild(tipo);
                    });
                    info.innerHTML = null

                    let height = document.createElement('p');

                    height.innerHTML = "ID:" + jsonResposta.height;

                    info.appendChild(height);

                    document.getElementById('nomePoke').innerHTML = jsonResposta.name;

                })
        })
        .catch(function(err) {
            console.error(err); //retornar um erro 
        });
}