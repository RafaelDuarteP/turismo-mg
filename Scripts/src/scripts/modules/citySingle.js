/*
  Módulo responsável pela injeção de conteúdo nas páginas de cidades
*/
// ====== Imports
import cityList from '../../../../data/cities.json';
import cityImage from '../../templates/cityImage.html';

const citySingle = () => {
  /*
    Detecta se a página atual é uma página de cidade e, se sim, injeta o conteúdo adequado
  */

  const cityPayload = getCity();

  // Se o cityPayload não for null, executa o código
  if(cityPayload) {
    // Recupera Nodes
    const cityNameNode = document.querySelector('#cityName');
    const cityDetailsNode = document.querySelector('#cityDetails');
    const cityInfoNode = document.querySelector('.slider-city');
    const heroNode = document.querySelector('.landing-page');

    // Injeta nome e detalhes da cidade - Caso não existam no payload da cidade, injeta 'Conheça mais'
    cityNameNode.textContent = cityPayload.cidade || 'Conheça mais';
    cityDetailsNode.textContent = cityPayload.details || 'Conheça mais';

    // Recupera array de imagens da cidade
    const imageList = cityPayload.images;
    // Usa primeira imagem da cidade como imagem de fundo
    const backgroundImage = imageList.shift();
    heroNode.setAttribute('style', `background-image: url('${backgroundImage.source})'`);
    // Para cada imagem restante, insere na página
    injectImages(imageList, cityInfoNode);
  }
  
};



const getCity = () => {
  /*
    Procura por parâmetros na URL da página que fazem referência à cidade e, se encontrar,
    retorna as informações sobre a cidade
  */
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Se o parâmetro cidadeId não existir ou se o Id for inválido, retorna null
  // Se não, retorna a cidade correspondente
  const cityId = urlParams.get('cidadeId');

  return (!cityId || cityId < 0 || cityId > cityList.length-1) ? null : cityList[cityId];
};



const injectImages = (imageList, targetElement) => {
  /*
    Injeta no DOM as imagens de um array
  */
  const imageNodes = [];

  // Constrói array com nodes
  imageList.forEach((image) => {
    imageNodes.push(
      cityImage({
        src: image.source,
        alt: image.alt
      })
    ).code;
  });

  // Injeta os nodes, um a um, no DOM
  imageNodes.forEach((node) => {
    targetElement.insertAdjacentHTML('afterbegin', node);
  });

  initCitySlider();
};


const initCitySlider = () => {
  $('.slider-city').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 1,
    acessibility: true,
    autoplay: true,
    autoplaySpeed: 11000,
    adaptiveHeight: true,
    prevArrow: $('.slider-arrows.-ct>.slider-previous'),
    nextArrow: $('.slider-arrows.-ct>.slider-next'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });
};



export default citySingle;