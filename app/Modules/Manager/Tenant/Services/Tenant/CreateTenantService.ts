import { container, inject, injectable } from 'tsyringe'
import { ITenant } from '../../Interfaces/ITenant'
import { ConnectTenantService } from 'App/Modules/Manager/Tenant/Services/Connection'
@injectable()
export class CreateTenantService {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenant.Repository
  ) {}

  public async run(data: ITenant.DTO.Store) {
    const tenant = await this.tenantsRepository.create(data)
    const connectTenant = container.resolve(ConnectTenantService)

    await connectTenant.run(tenant)

    return tenant
  }
}
