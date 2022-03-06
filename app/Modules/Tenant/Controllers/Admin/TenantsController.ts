import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { container } from 'tsyringe'

import { CreateTenantService } from 'App/Modules/Tenant/Services/Tenant'
import { TenantValidator } from 'App/Modules/Tenant/Validators/TenantValidor'
export default class TenantsController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const data = await request.validate(TenantValidator.Store)

    const createService = container.resolve(CreateTenantService)

    const tenant = await createService.run(data)

    return response.json(tenant)
  }
}
