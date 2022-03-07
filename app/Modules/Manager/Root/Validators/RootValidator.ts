import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Root from '../Models/Root'

export namespace RootValidator {
  export class Store {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({
          table: 'roots',
          column: 'email',
        }),
      ]),
      password: schema.string(),
      user_name: schema.string({ trim: true }),
      access_type: schema.enum(Object.values(Root.access_types)),
    })
  }
}
