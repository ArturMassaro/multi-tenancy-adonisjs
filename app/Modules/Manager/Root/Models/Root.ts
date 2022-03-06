import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Root extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public user_name: string

  @column()
  public access_type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public access_types = {
    common: 'common_user',
    super_admin: 'super_admin',
  }

  @beforeSave()
  public static async hashPassword(root: Root) {
    if (root.$dirty.password) {
      root.password = await Hash.make(root.password)
    }
  }
}
