import { inject, injectable } from 'tsyringe'
import { IRoot } from 'App/Modules/Manager/Root/Interfaces/IRoot'
import Root from 'App/Modules/Manager/Root/Models/Root'
@injectable()
export class CreateRootService {
  constructor(
    @inject('RootsRepository')
    private rootsRepository: IRoot.Repository
  ) {}

  public async run(data: IRoot.DTO.Store): Promise<Root> {
    const root = await this.rootsRepository.create(data)

    return root
  }
}
