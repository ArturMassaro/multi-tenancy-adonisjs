import { ITenant } from 'App/Modules/Manager/Tenant/Interfaces/ITenant'
import Tenant from 'App/Modules/Manager/Tenant/Models/Tenant'

export default class TenantsRepository implements ITenant.Repository {
  protected orm: typeof Tenant

  constructor() {
    this.orm = Tenant
  }

  public async create(data: ITenant.DTO.Store): Promise<Tenant> {
    return this.orm.create(data, {
      connection: 'main',
    })
  }
}