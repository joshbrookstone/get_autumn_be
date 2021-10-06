import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import mockStressForOneUser from '../../Mock/MockStress/mockStressForOneUser.json';

import Stress from 'App/Models/Stress';

export default class StressesController {
  public async index({ params }: HttpContextContract) {
    return await Stress.findMany(params.id);
  }

  // mock getting data for a user, thius will give us all the stress

  public async show({}: HttpContextContract) {
    return mockStressForOneUser;
    // return Database.from('stresses').where('user_id', params.id).orderBy('created_at', 'asc');
    // return Stress.findOrFail(params.id);
  }
  public async update({ params, request }: HttpContextContract) {
    return await Stress.findOrFail(params.id);
  }

  public async mockStress({}) {
    return 'working';
  }
}
