import Route from '@ioc:Adonis/Core/Route'
import AccessTypes from 'App/Shared/Types/AccessTypes'
import TenantsController from '../Controllers/Admin/TenantsController'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.group(() => {
    /** Tenant Routes */
    Route.post('/tenant', new TenantsController().store)
    Route.get('/tenant', new TenantsController().index)
    Route.get('/tenant/:uuid', new TenantsController().show)
    Route.put('/tenant/:uuid', new TenantsController().update)
    Route.delete('/tenant/:uuid', new TenantsController().destroy)
  })
    .prefix('root')
    .middleware(['auth', `acl:${AccessTypes.super_admin}`])
}).prefix('v1')
