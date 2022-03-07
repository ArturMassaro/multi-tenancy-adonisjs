import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import { inject, injectable } from 'tsyringe'
import { ITenant } from '../../Interfaces/ITenant'

@injectable()
export class UpdateTenantService {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenant.Repository
  ) {}

  public async run(uuid: number, updateDate: ITenant.DTO.Update) {
    const tenant = await this.tenantsRepository.show(uuid)

    if (!tenant) throw new NotFoundException('Tenant not found')

    tenant.merge(updateDate)

    await this.tenantsRepository.update(tenant)

    return tenant
  }
}
