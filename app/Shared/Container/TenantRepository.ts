import { ITenant } from 'App/Modules/Tenant/Interfaces/ITenant'
import TenantsRepository from 'App/Modules/Tenant/Repositories/TenantsRepository'
import { container, delay } from 'tsyringe'

container.registerSingleton<ITenant.Repository>(
  'TenantsRepository',
  delay(() => TenantsRepository)
)
