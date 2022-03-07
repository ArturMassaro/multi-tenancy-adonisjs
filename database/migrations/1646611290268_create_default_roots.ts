import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { container } from 'tsyringe'
import { CreateDefaultRootService } from 'App/Modules/Manager/Root/Services/Root'

export default class CreateDefaultRoots extends BaseSchema {
  public async up() {
    const createDefaults = await container.resolve(CreateDefaultRootService)
    await createDefaults.run()
  }

  public async down() {}
}
