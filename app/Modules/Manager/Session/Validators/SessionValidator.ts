import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export namespace SessionValidator {
  export class Store {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
      email: schema.string({ trim: true }),
      password: schema.string(),
    })
  }
}
