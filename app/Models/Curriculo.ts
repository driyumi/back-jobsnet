import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Curriculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome_completo: string

  @column()
  public cargo: string

  @column()
  public data_nascimento: Date

  @column()
  public estado_civil: string

  @column()
  public sexo: string

  @column()
  public cep: string

  @column()
  public cidade: string

  @column()
  public estado: string

  @column()
  public logradouro: string

  @column()
  public numero: string

  @column()
  public complemento: string

  @column()
  public bairro: string

  @column()
  public telefone_fixo1: string

  @column()
  public telefone_fixo2: string

  @column()
  public celular: string

  @column()
  public contato: string

  @column()
  public email: string

  @column()
  public identidade: string

  @column()
  public cpf: string

  @column()
  public possui_veiculo: string

  @column()
  public habilitacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
