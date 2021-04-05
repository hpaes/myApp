const usersController = {
  index: (request, response) => {
    response.send('Estou exibindo essa mensagem através do controller');
  },
};

module.exports = usersController;
