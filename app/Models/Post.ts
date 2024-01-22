import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Category from './Category'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column({ serializeAs: null })
  public categoryId: number

  @belongsTo(() => Category, {
    localKey: 'categoryId'
  })
  public category: BelongsTo<typeof Category>

  @column({ serializeAs: null })
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
