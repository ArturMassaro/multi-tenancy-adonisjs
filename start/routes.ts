/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

/** Route imports */
import 'App/Modules/Manager/Tenant/Routes/index'
import 'App/Modules/Manager/Root/Routes/index'
import 'App/Modules/Manager/Session/Routes/index'
import AccessTypes from 'App/Shared/Types/AccessTypes'

/** HealthCheck Route */
Route.group(() => {
  Route.get('/health_check', async ({ response }: HttpContextContract) => {
    const report = await HealthCheck.getReport()

    return report.healthy ? response.ok(report) : response.badRequest(report)
  })
})
  .middleware(['auth', `acl:${AccessTypes.super_admin},${AccessTypes.common}`])
  .prefix('v1')
