import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateSessionService } from 'App/Modules/Manager/Session/Service/Sessions'
import { container } from 'tsyringe'
import { SessionValidator } from 'App/Modules/Manager/Session/Validators/SessionValidator'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract): Promise<void> {
    const data = await request.validate(SessionValidator.Store)
    const createService = container.resolve(CreateSessionService)

    const root = await createService.run(data.email, data.password, auth)

    return response.json(root)
  }
}
