import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  /**
   * Handle request
   */
  public async handle(
    { auth }: HttpContextContract,
    next: () => Promise<void>,
    aclRoles: Array<string>
  ) {
    if (!Array.isArray(aclRoles)) throw new Error('User not allowed')

    const { user } = auth
    const accessType = user!.access_type

    if (aclRoles.includes(accessType)) {
      await next()
    } else {
      throw new Error('User not allowed')
    }
  }
}
