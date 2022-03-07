import Tenant from 'App/Modules/Manager/Tenant/Models/Tenant'

export namespace ITenant {
  export interface Repository extends Helpers {
    create(data: ITenant.DTO.Store): Promise<Tenant>
  }

  export interface Helpers {}

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
