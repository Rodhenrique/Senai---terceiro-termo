var Livros = [];
var Livro = {
    nome: "",
    genero: "",
    autor: "",
    editora: "",
    dataLancamento: "",
    QtdPaginas: 0,
    preco: 0,
    descricao: "",
    Idioma: "",
    RankMaisVendidos: "",
}

var ids = ['nome', 'genero', 'autor', 'editora', 'dataLancamento',
    'QtdPaginas', 'preco', 'descricao', 'Idioma', 'RankMaisVendidos'
];

function AddLivro() {
    for (let index = 0; index <= 9; index++) {
        Livro[Object.keys(Livro)[index]] = document.getElementById(ids[index]).value;
    }
    Livros.push(Livro);
    console.log(Livros);

    var tabela = document.getElementById("tabela")
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);

    for (let index = 0; index <= 11; index++) {
        let celula1 = linha.insertCell(index);
        if (index == 10) {
            celula1.innerHTML = "<button onclick='Remove(this)'>Remover</button>";
        } else if (index == 11) {
            celula1.innerHTML = "<button onclick='Edita()'>Editar</button>";
        } else {
            celula1.innerHTML = "<tr><td><input type='text' disabled=true value=" + Livro[Object.keys(Livro)[index]] + "></td></tr>";
        }
    }

}

function Remove(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tabela').deleteRow(i);
}