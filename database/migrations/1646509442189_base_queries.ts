import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BaseQueries extends BaseSchema {
  protected tableName = 'base_queries'

  public async up() {
    await this.db.rawQuery('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').knexQuery
  }

  public async down() {
    await this.db.rawQuery('DROP EXTENSION "uuid-ossp";').knexQuery
  }
}
