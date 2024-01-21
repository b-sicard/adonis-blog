import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasOne, belongsTo, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Category from './Category'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public categoryId: number

  @hasOne(() => Category, {
    localKey: 'categoryId'
  })
  public category: HasOne<typeof Category>

  @column()
  public authorId: number

  @belongsTo(() => User, {
    foreignKey: 'authorId', // This should match the column name above
  })
  public author: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
