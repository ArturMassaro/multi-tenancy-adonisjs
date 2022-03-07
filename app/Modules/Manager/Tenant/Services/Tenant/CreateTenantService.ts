import { inject, injectable } from 'tsyringe'
import { ITenant } from '../../Interfaces/ITenant'

@injectable()
export class CreateTenantService {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenant.Repository
  ) {}

  public async run(data: ITenant.DTO.Store) {
    const tenant = await this.tenantsRepository.create(data)

    return tenant
  }
}
