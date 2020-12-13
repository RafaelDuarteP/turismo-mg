const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator'); //npm install express-validator@5.3.1 --save-exact
const compression = require('compression'); //compressão automática do response com tamanho maior ou igual a 1kb.


///**@param { import('express').Express} app*/
module.exports = (app) => {
    app.use(compression())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors({ credentials: true, origin: true }));
    app.use(cookieParser());
    app.use(expressValidator()); //Deve ser utilizado após o body-parser
}