import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tenants extends BaseSchema {
  protected tableName = 'tenants'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('uuid').unique().notNullable()
      table.text('db_name').unique().notNullable()
      table.text('db_host').notNullable()
      table.text('db_username').notNullable()
      table.text('db_password')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
