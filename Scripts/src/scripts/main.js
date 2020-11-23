// ====== Imports
// Stylesheet
import '../styles/main.scss';
// Módulos
import citySingle from './modules/citySingle';
import calculateExpenses from './modules/flightSearch';
// Componentes
import searchBox from './components/searchBox';


// Event listeners

const searchInputNode = document.querySelector('.search-text');
const calculatorBtn = document.querySelector('#submitCalc');

if(searchInputNode) {
  searchInputNode.addEventListener('keyup', searchBox);
}
if(calculatorBtn) {
  calculatorBtn.addEventListener('click', calculateExpenses);
}

// Código a ser executado caso seja uma single de cidade
citySingle();