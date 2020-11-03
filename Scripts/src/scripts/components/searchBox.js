/*
  Componente de busca por cidades
*/
// ====== Imports
import cityList from '../../../../data/cities.json';
import searchResultItem from '../../templates/searchResultItem.html';


const searchBox = () => {
  /*

  */

  // Recupera os nodes
  const searchBoxNode = document.querySelector('.search-box');
  const searchInputNode = document.querySelector('.search-text');
  const resultBoxNode = document.querySelector('#searchResultBox');

  // Se os nodes existirem, executa o código
  if(searchBoxNode && searchInputNode) {
    if(searchInputNode.value) {
      const searchResults = searchCities(searchInputNode.value);
      injectSearchResults(searchResults);
      resultBoxNode.classList.add('-show');
    }
    else{
      resultBoxNode.classList.remove('-show');
    }
  }

};



const searchCities = (searchParam) => {
  /*
    Busca no array de cidades pelo termo informado e retorna um array com os resultados
  */
  const searchResults = [];

  // Para cada cidade na lista, checa se o nome (em lower case) contém o parâmetro (em lower case)
  cityList.forEach((city, index) => {
    if(city.cidade.toLowerCase().includes(searchParam.toLowerCase())) {
      searchResults.push({
        name: city.cidade,
        id: index
      });
    }
  });

  return searchResults;
};



const injectSearchResults = (results) => {
  /*
    A partir do payload com os resultados da busca, injeta os resultados na caixa de busca
  */

  const searchResultsNode = document.querySelector('#searchResultBox');
  const resultCountNode = document.querySelector('.result-count');

  // Insere a quantidade de resultados encontrados no contador
  const resultCounterText = results.length === 0 ? 'Nenhum resultado encontrado' : `${results.length} resultados encontrados:`;
  resultCountNode.textContent = resultCounterText;

  // Remove os nodes de resultado antigos
  const oldResultNodes = [...document.querySelectorAll('#searchResultBox>a')];
  oldResultNodes.forEach((node) => {
    node.parentNode.removeChild(node);
  });


  // Para cada resultado encontrado, insere um node na caixa de resultados
  results.forEach((result) => {
    const node = searchResultItem({
      url: `cidade.html?cidadeId=${result.id}`,
      city: result.name
    });
    searchResultsNode.insertAdjacentHTML('beforeend', node);
  });

};


export default searchBox;