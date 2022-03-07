import Tenant from 'App/Modules/Manager/Tenant/Models/Tenant'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'

export namespace ITenant {
  export interface Repository extends Helpers {
    create(data: ITenant.DTO.Store): Promise<Tenant>
    index(page: number, perPage: number): Promise<ModelPaginatorContract<Tenant>>
    update(tenant: Tenant): Promise<Tenant>
    show(uuid: number): Promise<Tenant | null>
    destroy(tenant: Tenant): Promise<void>
  }

  export interface Helpers {
    findBy(findKey: string, findValue: any): Promise<Tenant | null>
  }

  export namespace DTO {
    export interface Store {
      db_name: string
      db_host: string
      db_username: string
      db_password?: string
    }

    export interface Update {
      db_name?: string
      db_host?: string
      db_username?: string
      db_password?: string
    }
  }
}
