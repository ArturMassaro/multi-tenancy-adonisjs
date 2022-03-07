import { IRoot } from 'App/Modules/Manager/Root/Interfaces/IRoot'
import Root from 'App/Modules/Manager/Root/Models/Root'

const defaults: IRoot.DTO.Store[] = [
  {
    email: 'root@email.com',
    password: 'changeaftercreate',
    access_type: Root.access_types.super_admin,
    user_name: 'root',
  },
]

export default defaults
