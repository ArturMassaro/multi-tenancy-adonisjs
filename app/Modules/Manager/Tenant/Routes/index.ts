import Route from '@ioc:Adonis/Core/Route'
import TenantsController from '../Controllers/Admin/TenantsController'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  /** Tenant Routes */
  Route.post('/tenant', new TenantsController().store)
}).prefix('root')
