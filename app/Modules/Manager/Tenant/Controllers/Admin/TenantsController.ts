import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { container } from 'tsyringe'

import {
  CreateTenantService,
  IndexTenantService,
  ShowTenantService,
  UpdateTenantService,
  DeleteTenantService,
} from 'App/Modules/Manager/Tenant/Services/Tenant'
import { ConnectAllTenantsService } from 'App/Modules/Manager/Tenant/Services/Connection'
import { TenantValidator } from 'App/Modules/Manager/Tenant/Validators/TenantValidor'
export default class TenantsController {
  public async index({ request, response }: HttpContextContract): Promise<void> {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)

    const indexService = container.resolve(IndexTenantService)

    const tenants = await indexService.run(page, perPage)

    return response.json(tenants)
  }

  public async show({ params, response }: HttpContextContract): Promise<void> {
    const { uuid } = params

    const showService = container.resolve(ShowTenantService)

    const tenant = await showService.run(uuid)

    return response.json(tenant)
  }

  public async store({ request, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(TenantValidator.Store)

    const createService = container.resolve(CreateTenantService)

    const tenant = await createService.run(data)

    return response.json(tenant)
  }

  public async update({ request, params, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(TenantValidator.Update)
    const { uuid } = params

    const updateService = container.resolve(UpdateTenantService)

    const tenant = await updateService.run(uuid, data)

    return response.json(tenant)
  }

  public async destroy({ request, params, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(TenantValidator.Update)
    const { uuid } = params

    const deleteService = container.resolve(DeleteTenantService)

    await deleteService.run(uuid, data)

    return response.json({ msg: 'Tenant deleted' })
  }

  public async connect({ response }: HttpContextContract): Promise<void> {
    const connectService = container.resolve(ConnectAllTenantsService)

    await connectService.run()

    return response.json({ msg: 'Tenant connect' })
  }
}
