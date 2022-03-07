import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import { ITenant } from 'App/Modules/Manager/Tenant/Interfaces/ITenant'
import Tenant from 'App/Modules/Manager/Tenant/Models/Tenant'

export default class TenantsRepository implements ITenant.Repository {
  protected orm: typeof Tenant

  constructor() {
    this.orm = Tenant
  }

  public async index(page: number, perPage: number): Promise<ModelPaginatorContract<Tenant>> {
    return this.orm
      .query({
        connection: 'main',
      })
      .orderBy('db_name', 'asc')
      .paginate(page, perPage)
  }

  public async show(uuid: number): Promise<Tenant | null> {
    return this.orm
      .query({
        connection: 'main',
      })
      .where({ uuid: uuid })
      .first()
  }

  public async create(data: ITenant.DTO.Store): Promise<Tenant> {
    return this.orm.create(data, {
      connection: 'main',
    })
  }

  public async findBy(findKey: string, findValue: any): Promise<Tenant | null> {
    return this.orm.findBy(findKey, findValue, {
      connection: 'main',
    })
  }

  public async update(tenant: Tenant): Promise<Tenant> {
    return tenant.save()
  }

  public async destroy(tenant: Tenant): Promise<void> {
    return tenant.delete()
  }
}
