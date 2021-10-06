import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Stresses extends BaseSchema {
  protected tableName = 'stresses';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.float('stress');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });

      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE'); // delete post when user is deleted
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
