import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import { inject, injectable } from 'tsyringe'
import { ITenant } from '../../Interfaces/ITenant'

@injectable()
export class ShowTenantService {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenant.Repository
  ) {}

  public async run(uuid: number) {
    const tenant = await this.tenantsRepository.show(uuid)

    if (!tenant) throw new NotFoundException('Tenant not found')

    return tenant
  }
}
