import { injectable } from 'tsyringe'
import Database from '@ioc:Adonis/Lucid/Database'

@injectable()
export class CreateTenantDatabaseService {
  constructor() {}

  public async run(db_name: string) {
    const exists = await Database.connection('main').rawQuery(
      `SELECT datname FROM pg_database WHERE datname = '${db_name}'`
    )

    if (exists.rowCount > 0) {
      return null
    }

    await Database.connection('main').rawQuery(`create database ${db_name}`)
  }
}
