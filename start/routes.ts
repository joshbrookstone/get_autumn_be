/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

// import HealthCheck from '@ioc:Adonis/Core/HealthCheck';

// Route.get('health', async ({ response }) => {
//   const report = await HealthCheck.getReport();

//   return report.healthy ? response.ok(report) : response.badRequest(report);
// });

import Route from '@ioc:Adonis/Core/Route';
import mockStressLastWeek from '../app/Mock/MockStress/mockStressLastWeek.json';
import mockStressCurrentMonth from '../app/Mock/MockStress/mockStressCurrentMonth.json';
import mockStressCurrentWeek from '../app/Mock/MockStress/mockStressCurrentWeek.json';
import mockStressLastMonth from '../app/Mock/MockStress/mockStressLastMonth.json';
import mockMeetingsThisWeek from '../app/Mock/MockMeetings/mockMeetingsThisWeek.json';
import mockMeetingsLastWeek from '../app/Mock/MockMeetings/mockMeetingsLastWeek.json';
import mockMessagesLastWeek from '../app/Mock/MockMessages/mockMessagesLastWeek.json';
import mockMessagesCurrentWeek from '../app/Mock/MockMessages/mockMessagesCurrentWeek.json';

Route.resource('users', 'UsersController').apiOnly();

Route.resource('stresses', 'StressesController').apiOnly();

Route.get('/lastWeekStress', () => {
  return mockStressLastWeek;
});

Route.get('/stressCurrentMonth', () => {
  return mockStressCurrentMonth;
});
Route.get('/currentWeekStress', () => {
  return mockStressCurrentWeek;
});
Route.get('/lastMonthStress', () => {
  return mockStressLastMonth;
});

Route.get('/mockMeetingsLastWeek', () => {
  return mockMeetingsLastWeek;
});

Route.get('/mockMeetingsThisWeek', () => {
  return mockMeetingsThisWeek;
});

Route.get('/mockMessagesLastWeek', () => {
  return mockMessagesLastWeek;
});

Route.get('/mockMessagesCurrentWeek', () => {
  return mockMessagesCurrentWeek;
});
