const GoalRepository = require("../repositories/GoalRepository");

class BalanceController {
  async insereMeta(request, response) {
    const { id_usuario, nome, url_image, numero_parcela, valor } = request.body;
    const responseAPI = await GoalRepository.createGoal(
      id_usuario,
      nome,
      url_image,
      numero_parcela,
      valor
    );

    response.json(responseAPI);
  }

  async show(request, response) {
    const { id } = request.params;
    const goal = await GoalRepository.findById(id);

    response.json(goal);
  }

  async insereSaida(request, response) {
    const { id_usuario, valor, saida } = request.body;
    const valorSaida = await BalanceRepository.createSaida(
      id_usuario,
      valor,
      saida
    );

    response.json(valorSaida);
  }

  async index(request, response) {
    const { id_usuario } = request.params;

    const contacts = await GoalRepository.findAll(id_usuario);

    response.json(contacts);
  }

  async update(request, response) {
    const { id_meta, realizado } = request.body;
    const updatedGoal = await GoalRepository.updateGoal(id_meta, realizado);

    response.json(updatedGoal);
  }

  // async show(request, response) {
  //   const { id } = request.body;
  //   const contact = await UsersRespository.findById(id);
  //   if (!contact) {
  //     return response.status(404).json({ error: "Contact not found" });
  //   }

  //   response.json(contact);
  // }

  // async store(request, response) {
  //   const { nome, email, senha } = request.body;

  //   const contactExists = await UsersRespository.findByEmail(email);

  //   if (contactExists) {
  //     return response
  //       .status(400)
  //       .json({ error: "This e-mail is already been use" });
  //   }

  //   const contact = await UsersRespository.create({
  //     nome: "",
  //     email,
  //     senha,
  //   });

  //   response.json(contact);
  // }

  // async update(request, response) {
  //   const { id } = request.params;
  //   const { nome } = request.body;

  //   const contactExists = await UsersRespository.findById(id);

  //   if (!contactExists) {
  //     return response.status(404).json({ error: "User not found" });
  //   }

  //   if (!nome) {
  //     return response.status(400).json({ error: "Name is required" });
  //   }

  //   // const contactByEmail = await UsersRespository.findByEmail(email);
  //   // if (contactByEmail && contactByEmail.id !== id) {
  //   //   return response
  //   //     .status(400)
  //   //     .json({ error: "This e-mail is already been use" });
  //   // }

  //   const contact = await UsersRespository.update(id, {
  //     nome,
  //   });

  //   response.json(contact);
  // }

  // async updateSaldo(request, response) {
  //   const { id } = request.params;
  //   const { saldo } = request.body;

  //   const contactExists = await UsersRespository.findById(id);

  //   if (!contactExists) {
  //     return response.status(404).json({ error: "User not found" });
  //   }

  //   // if (!nome) {
  //   //   return response.status(400).json({ error: "Name is required" });
  //   // }

  //   // const contactByEmail = await UsersRespository.findByEmail(email);
  //   // if (contactByEmail && contactByEmail.id !== id) {
  //   //   return response
  //   //     .status(400)
  //   //     .json({ error: "This e-mail is already been use" });
  //   // }

  //   const contact = await UsersRespository.updateSaldo(id, {
  //     saldo,
  //   });

  //   response.json(contact);
  // }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await UsersRespository.delete(id);
  //   response.sendStatus(204);
  // }

  // async login(request, response) {
  //   const { email, senha } = request.body;

  //   const user = await UsersRespository.findByEmail(email);

  //   if (!user) {
  //     return response.status(400).json({ error: "User not found" });
  //   }

  //   if (user.senha !== senha) {
  //     return response.status(400).json({ error: "Invalid password" });
  //   }

  //   response.json(user.id_usuario);
  // }
}

module.exports = new BalanceController();
