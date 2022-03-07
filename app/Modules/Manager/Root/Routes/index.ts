import Route from '@ioc:Adonis/Core/Route'
import RootsController from 'App/Modules/Manager/Root/Controllers/Admin/RootsController'
import AccessTypes from 'App/Shared/Types/AccessTypes'

Route.group(() => {
  Route.group(() => {
    /** Root Routes */
    Route.post('/root', new RootsController().store)
  })
    .prefix('root')
    .middleware(['auth', `acl:${AccessTypes.super_admin}`])
}).prefix('v1')
