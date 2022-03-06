import Tenant from 'App/Modules/Manager/Tenant/Models/Tenant'

export namespace IRoot {
  export interface Repository extends Helpers {
    create(data: IRoot.DTO.Store): Promise<Tenant>
  }

  export interface Helpers {}

  export namespace DTO {
    export interface Store {
      email: string
      password: string
      rememberMeToken?: string
      user_name: string
      access_type: string
    }

    export interface Update {
      email?: string
      password?: string
      rememberMeToken?: string
      user_name?: string
      access_type?: string
    }
  }
}
