import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import { inject, injectable } from 'tsyringe'
import { ITenant } from '../../Interfaces/ITenant'

@injectable()
export class DeleteTenantService {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenant.Repository
  ) {}

  public async run(uuid: number, updateDate: ITenant.DTO.Update): Promise<Boolean> {
    const tenant = await this.tenantsRepository.show(uuid)

    if (!tenant) throw new NotFoundException('Tenant not found')

    tenant.merge(updateDate)

    await this.tenantsRepository.destroy(tenant)

    return true
  }
}
