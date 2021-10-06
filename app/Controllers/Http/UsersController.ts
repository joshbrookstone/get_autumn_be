import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';
import mockUsers from '../../Mock/MockUsers/mockusers.json';

import User from 'App/Models/User';

export default class UsersController {
  public async index() {
    // return (await User.all()).sort((a, b) => a.id - b.id);
    return mockUsers;
  }

  public async store({ request, response }: HttpContextContract) {
    // const body = request.body();
    const newUserSchema = schema.create({
      name: schema.string({ trim: true }),
    });

    const payload = await request.validate({ schema: newUserSchema });

    const user = await User.create(payload);

    response.status(201);

    return user;
  }

  // this will just return the first user
  public async show({ params }: HttpContextContract) {
    // return User.findOrFail(params.id);
    return mockUsers[0];
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body();

    const user = await User.findOrFail(params.id);

    user.name = body.name;

    return user.save();
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    response.status(204);
    return user.delete();
  }
}
