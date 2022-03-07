import Route from '@ioc:Adonis/Core/Route'
import AccessTypes from 'App/Shared/Types/AccessTypes'
import TenantsController from '../Controllers/Admin/TenantsController'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  /** Tenant Routes */
  Route.post('/tenant', new TenantsController().store)
})
  .prefix('root')
  .middleware(['auth', `acl:${AccessTypes.super_admin}`])
