function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, mostra a seção no console

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma String sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
    
    
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML dos resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2> 
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
     }
    }

if (!resultados) {
    resultados = "<p>nenhum atleta encontrado</p>"
}

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}