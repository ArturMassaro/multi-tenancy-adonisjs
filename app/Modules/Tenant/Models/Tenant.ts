import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 } from 'uuid'
export default class Tenant extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({
    prepare: () => v4(),
  })
  public uuid: string

  @column()
  public db_name: string

  @column()
  public db_host: string

  @column()
  public db_username: string

  @column()
  public db_password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
