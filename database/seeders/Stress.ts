import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Stress from 'App/Models/Stress';

export default class StressSeeder extends BaseSeeder {
  public async run() {
    await Stress.truncate(true);
    await Stress.createMany([
      {
        userId: 6,
        stress: 2.792,
      },
      {
        userId: 3,
        stress: 4.721,
      },
      {
        userId: 1,
        stress: 1.362,
      },
      {
        userId: 6,
        stress: 1.931,
      },
      {
        userId: 1,
        stress: 3.894,
      },
      {
        userId: 5,
        stress: 3.376,
      },
      {
        userId: 5,
        stress: 1.908,
      },
      {
        userId: 2,
        stress: 1.563,
      },
      {
        userId: 5,
        stress: 3.514,
      },
      {
        userId: 3,
        stress: 4.711,
      },
      {
        userId: 1,
        stress: 3.938,
      },
      {
        userId: 1,
        stress: 1.631,
      },
      {
        userId: 1,
        stress: 3.557,
      },
      {
        userId: 2,
        stress: 1.628,
      },
      {
        userId: 4,
        stress: 4.971,
      },
      {
        userId: 3,
        stress: 3.13,
      },
      {
        userId: 2,
        stress: 2.388,
      },
      {
        userId: 2,
        stress: 4.066,
      },
      {
        userId: 6,
        stress: 2.649,
      },
      {
        userId: 6,
        stress: 4.728,
      },
      {
        userId: 6,
        stress: 3.911,
      },
      {
        userId: 3,
        stress: 1.654,
      },
      {
        userId: 4,
        stress: 3.879,
      },
      {
        userId: 3,
        stress: 3.78,
      },
      {
        userId: 1,
        stress: 3.565,
      },
      {
        userId: 4,
        stress: 2.277,
      },
      {
        userId: 5,
        stress: 2.109,
      },
      {
        userId: 5,
        stress: 2.748,
      },
      {
        userId: 1,
        stress: 2.133,
      },
      {
        userId: 1,
        stress: 2.925,
      },
      {
        userId: 2,
        stress: 2.123,
      },
      {
        userId: 2,
        stress: 3.404,
      },
      {
        userId: 4,
        stress: 1.604,
      },
      {
        userId: 2,
        stress: 2.539,
      },
      {
        userId: 5,
        stress: 2.696,
      },
      {
        userId: 3,
        stress: 3.606,
      },
      {
        userId: 3,
        stress: 3.441,
      },
      {
        userId: 4,
        stress: 4.522,
      },
      {
        userId: 1,
        stress: 1.768,
      },
      {
        userId: 2,
        stress: 2.906,
      },
      {
        userId: 3,
        stress: 3.47,
      },
      {
        userId: 3,
        stress: 3.095,
      },
      {
        userId: 1,
        stress: 4.625,
      },
      {
        userId: 6,
        stress: 3.08,
      },
      {
        userId: 5,
        stress: 2.441,
      },
      {
        userId: 2,
        stress: 2.704,
      },
      {
        userId: 1,
        stress: 4.783,
      },
      {
        userId: 4,
        stress: 4.93,
      },
      {
        userId: 2,
        stress: 1.834,
      },
      {
        userId: 6,
        stress: 4.575,
      },
      {
        userId: 1,
        stress: 2.194,
      },
      {
        userId: 5,
        stress: 2.002,
      },
      {
        userId: 1,
        stress: 3.394,
      },
      {
        userId: 4,
        stress: 2.747,
      },
      {
        userId: 2,
        stress: 1.045,
      },
      {
        userId: 3,
        stress: 1.126,
      },
      {
        userId: 1,
        stress: 3.198,
      },
      {
        userId: 4,
        stress: 4.248,
      },
      {
        userId: 1,
        stress: 2.831,
      },
      {
        userId: 1,
        stress: 1.928,
      },
      {
        userId: 5,
        stress: 4.588,
      },
      {
        userId: 5,
        stress: 2.022,
      },
      {
        userId: 2,
        stress: 3.194,
      },
      {
        userId: 1,
        stress: 1.649,
      },
      {
        userId: 2,
        stress: 1.524,
      },
      {
        userId: 6,
        stress: 1.709,
      },
      {
        userId: 6,
        stress: 3.746,
      },
      {
        userId: 5,
        stress: 1.042,
      },
      {
        userId: 2,
        stress: 2.989,
      },
      {
        userId: 6,
        stress: 3.954,
      },
      {
        userId: 5,
        stress: 4.797,
      },
      {
        userId: 1,
        stress: 3.245,
      },
      {
        userId: 2,
        stress: 4.903,
      },
      {
        userId: 5,
        stress: 1.205,
      },
      {
        userId: 2,
        stress: 2.58,
      },
      {
        userId: 5,
        stress: 3.281,
      },
      {
        userId: 6,
        stress: 3.245,
      },
      {
        userId: 4,
        stress: 4.352,
      },
      {
        userId: 4,
        stress: 2.96,
      },
      {
        userId: 6,
        stress: 4.006,
      },
      {
        userId: 3,
        stress: 3.61,
      },
      {
        userId: 2,
        stress: 3.341,
      },
      {
        userId: 1,
        stress: 2.301,
      },
      {
        userId: 5,
        stress: 3.075,
      },
      {
        userId: 4,
        stress: 3.43,
      },
      {
        userId: 4,
        stress: 2.213,
      },
      {
        userId: 2,
        stress: 2.485,
      },
      {
        userId: 2,
        stress: 1.398,
      },
      {
        userId: 3,
        stress: 2.864,
      },
      {
        userId: 4,
        stress: 1.634,
      },
      {
        userId: 5,
        stress: 4.849,
      },
      {
        userId: 6,
        stress: 1.125,
      },
      {
        userId: 6,
        stress: 1.397,
      },
      {
        userId: 3,
        stress: 3.388,
      },
      {
        userId: 3,
        stress: 3.977,
      },
      {
        userId: 4,
        stress: 4.994,
      },
      {
        userId: 1,
        stress: 4.023,
      },
      {
        userId: 3,
        stress: 3.794,
      },
      {
        userId: 4,
        stress: 4.418,
      },
      {
        userId: 3,
        stress: 2.245,
      },
    ]);
    // Write your database queries inside the run method
  }
}
