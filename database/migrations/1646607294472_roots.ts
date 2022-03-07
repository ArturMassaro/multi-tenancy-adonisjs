import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RootsSchema extends BaseSchema {
  protected tableName = 'roots'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.text('email').notNullable()
      table.text('password').notNullable()
      table.text('remember_me_token').nullable()
      table.text('user_name').nullable()
      table.text('access_type').defaultTo('common_user')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
