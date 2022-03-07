import { inject, injectable } from 'tsyringe'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { IRoot } from 'App/Modules/Manager/Root/Interfaces/IRoot'

@injectable()
export class CreateSessionService {
  constructor(
    @inject('RootsRepository')
    private rootsRepository: IRoot.Repository
  ) {}

  public async run(email: string, password: string, auth: AuthContract): Promise<Object | null> {
    const token = await auth.attempt(email, password)

    const root = await this.rootsRepository.findBy('email', email)

    if (root) return { root: { ...root.toJSON() }, auth: token }

    return null
  }
}
