import Root from 'App/Modules/Manager/Root/Models/Root'

export namespace IRoot {
  export interface Repository extends Helpers {
    create(data: IRoot.DTO.Store): Promise<Root>
  }

  export interface Helpers {
    findOrCreate(findObject: Object, createObject: IRoot.DTO.Store): Promise<Root>
  }

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
