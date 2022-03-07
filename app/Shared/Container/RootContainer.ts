import { IRoot } from 'App/Modules/Manager/Root/Interfaces/IRoot'
import RootsRepository from 'App/Modules/Manager/Root/Repositories/RootsRepository'
import { container, delay } from 'tsyringe'

container.registerSingleton<IRoot.Repository>(
  'RootsRepository',
  delay(() => RootsRepository)
)
