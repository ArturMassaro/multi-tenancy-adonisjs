import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export namespace TenantValidator {
  export class Store {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
      db_name: schema.string(),
      db_host: schema.string(),
      db_username: schema.string(),
      db_password: schema.string.optional(),
    })
  }
}
