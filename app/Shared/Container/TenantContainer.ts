import { ITenant } from 'App/Modules/Manager/Tenant/Interfaces/ITenant'
import TenantsRepository from 'App/Modules/Manager/Tenant/Repositories/TenantsRepository'
import { container, delay } from 'tsyringe'

container.registerSingleton<ITenant.Repository>(
  'TenantsRepository',
  delay(() => TenantsRepository)
)
