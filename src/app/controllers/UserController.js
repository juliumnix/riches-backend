const UsersRespository = require("../repositories/UsersRespository");

class UserController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await UsersRespository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await UsersRespository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { nome, email, senha } = request.body;

    const contactExists = await UsersRespository.findByEmail(email);

    if (contactExists) {
      return response
        .status(400)
        .json({ error: "This e-mail is already been use" });
    }

    const contact = await UsersRespository.create({
      nome,
      email,
      senha,
    });

    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome } = request.body;

    const contactExists = await UsersRespository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: "User not found" });
    }

    if (!nome) {
      return response.status(400).json({ error: "Name is required" });
    }

    // const contactByEmail = await UsersRespository.findByEmail(email);
    // if (contactByEmail && contactByEmail.id !== id) {
    //   return response
    //     .status(400)
    //     .json({ error: "This e-mail is already been use" });
    // }

    const contact = await UsersRespository.update(id, {
      nome,
    });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await UsersRespository.delete(id);
    response.sendStatus(204);
  }

  async login(request, response) {
    const { email, senha } = request.body;

    const user = await UsersRespository.findByEmail(email);

    if (!user) {
      return response.status(400).json({ error: "User not found" });
    }

    if (user.senha !== senha) {
      return response.status(400).json({ error: "Invalid password" });
    }

    response.json(user.id_usuario);
  }
}

module.exports = new UserController();
