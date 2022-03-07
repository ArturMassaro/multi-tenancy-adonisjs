import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export namespace TenantValidator {
  export class Store {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
      db_name: schema.string({}, [
        rules.unique({
          table: 'tenants',
          column: 'db_name',
        }),
      ]),
      db_host: schema.string(),
      db_username: schema.string(),
      db_password: schema.string.optional(),
    })
  }
  export class Update {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
      db_name: schema.string.optional({}, [
        rules.unique({
          table: 'tenants',
          column: 'db_name',
          whereNot: {
            uuid: this.ctx.params.uuid ? this.ctx.params.uuid : null,
          },
        }),
      ]),
      db_host: schema.string.optional(),
      db_username: schema.string.optional(),
      db_password: schema.string.optional(),
    })
  }
}
