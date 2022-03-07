import { inject, injectable } from 'tsyringe'
import { ITenant } from '../../Interfaces/ITenant'

@injectable()
export class IndexTenantService {
  constructor(
    @inject('TenantsRepository')
    private tenantsRepository: ITenant.Repository
  ) {}

  public async run(page: number, perPage: number) {
    const tenants = await this.tenantsRepository.index(page, perPage)

    return tenants
  }
}
