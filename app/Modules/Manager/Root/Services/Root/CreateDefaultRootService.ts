import { inject, injectable } from 'tsyringe'
import { IRoot } from 'App/Modules/Manager/Root/Interfaces/IRoot'
import DefaultRoots from 'App/Modules/Manager/Root/Defaults/DefaultRoots'
import Logger from '@ioc:Adonis/Core/Logger'

@injectable()
export class CreateDefaultRootService {
  constructor(
    @inject('RootsRepository')
    private rootsRepository: IRoot.Repository
  ) {}

  public async run(): Promise<void> {
    const createPromises = DefaultRoots.map(async (item) =>
      this.rootsRepository.findOrCreate({ user_name: item.user_name }, item)
    )

    await Promise.all(createPromises).catch((error) => {
      console.log(error)
    })

    Logger.info('Root users created  🤠')
  }
}
