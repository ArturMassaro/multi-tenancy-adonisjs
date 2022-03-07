import { inject, injectable, container } from 'tsyringe'
import { ITenant } from '../../Interfaces/ITenant'
import Database from '@ioc:Adonis/Lucid/Database'
import { CreateTenantDatabaseService } from './CreateTenantDatabaseService'
import { RunMigrationTenantDatabaseService } from './RunMigrationTenantDatabaseService'
@injectable()
export class ConnectAllTenantsService {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenant.Repository
  ) {}

  public async run() {
    const tenants = await this.tenantsRepository.index(1, 100)
    const createDatabaseService = container.resolve(CreateTenantDatabaseService)
    const runMigrationService = container.resolve(RunMigrationTenantDatabaseService)
    tenants.forEach(async (tenant) => {
      await createDatabaseService.run(tenant.db_name)

      Database.manager.add(tenant.db_name, {
        client: 'pg',
        connection: {
          host: tenant.db_host,
          port: 5432,
          user: tenant.db_username,
          password: tenant.db_password,
          database: tenant.db_name,
        },
        migrations: {
          naturalSort: true,
          paths: ['./database/migrations_tenent'],
        },
        healthCheck: true,
        debug: true,
      })

      await runMigrationService.run(tenant.db_name)
    })

    console.log('Database connected')
    return tenants
  }
}
