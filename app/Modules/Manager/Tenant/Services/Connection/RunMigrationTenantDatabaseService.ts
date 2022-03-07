import { injectable } from 'tsyringe'
import Database from '@ioc:Adonis/Lucid/Database'
import Application from '@ioc:Adonis/Core/Application'
import Migrator from '@ioc:Adonis/Lucid/Migrator'

@injectable()
export class RunMigrationTenantDatabaseService {
  constructor() {}

  public async run(db_name: string) {
    const migrator = new Migrator(Database, Application, {
      direction: 'up',
      dryRun: false,
      connectionName: db_name,
    })

    await migrator.run()
    return migrator.migratedFiles
  }
}
