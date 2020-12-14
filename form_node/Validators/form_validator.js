function post (req, res, next) {
    req.checkBody('name', 'Favor informar o seu nome.').notEmpty();

    req.checkBody('email', 'Favor informar seu email.').notEmpty();

    req.checkBody('subject', 'Favor informar o assunto.').notEmpty();
  
    const errors = req.validationErrors();

    if (errors) {
      var response = { errors: [] };
      errors.forEach(function(err) {
        response.errors.push(err.param + ': ' + err.msg);
      });

      return res.status(400).json(response);
    }

    return next();
}

module.exports = {
  post: post
}