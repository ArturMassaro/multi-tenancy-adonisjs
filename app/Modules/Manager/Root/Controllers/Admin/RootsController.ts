import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateRootService } from 'App/Modules/Manager/Root/Services/Root'
import { container } from 'tsyringe'
import { RootValidator } from 'App/Modules/Manager/Root/Validators/RootValidator'

export default class RootsController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(RootValidator.Store)
    const createService = container.resolve(CreateRootService)

    const root = await createService.run(data)

    return response.json(root)
  }
}
