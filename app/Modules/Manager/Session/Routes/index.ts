import Route from '@ioc:Adonis/Core/Route'
import SessionsController from 'App/Modules/Manager/Session/Controllers/Admin/SessionsController'

Route.post('/session', new SessionsController().store)

Route.group(() => {
  /** Root Routes */
})
  .prefix('root')
  .middleware(['auth'])
