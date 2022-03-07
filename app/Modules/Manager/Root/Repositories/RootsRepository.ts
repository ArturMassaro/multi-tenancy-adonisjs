import { IRoot } from 'App/Modules/Manager/Root/Interfaces/IRoot'
import Root from 'App/Modules/Manager/Root/Models/Root'

export default class RootsRepository implements IRoot.Repository {
  protected orm: typeof Root

  constructor() {
    this.orm = Root
  }

  public async create(data: IRoot.DTO.Store): Promise<Root> {
    return this.orm.create(data, {
      connection: 'main',
    })
  }

  public async findOrCreate(findObject: Object, createObject: IRoot.DTO.Store): Promise<Root> {
    return this.orm.firstOrCreate(findObject, createObject, {
      connection: 'main',
    })
  }
}
