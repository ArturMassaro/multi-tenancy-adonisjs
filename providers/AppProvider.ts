import { ApplicationContract } from '@ioc:Adonis/Core/Application'
export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
    await import('../app/Shared/Container/index')
  }

  public async ready() {
    // App is ready
    const { container } = await import('tsyringe')
    const { ConnectAllTenantsService } = await import(
      '../app/Modules/Manager/Tenant/Services/Connection/index'
    )

    const connectService = container.resolve(ConnectAllTenantsService)
    await connectService.run()
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
