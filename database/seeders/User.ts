import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import User from 'App/Models/User';

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.truncate(true);
    await User.createMany([
      {
        name: 'Kent',
      },
      {
        name: 'Erika',
      },
      {
        name: 'Charyl',
      },
      {
        name: 'Mercedes',
      },
      {
        name: 'Corrine',
      },
      {
        name: 'Oliver',
      },
    ]);
    // Write your database queries inside the run method
  }
}
