import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Curriculos extends BaseSchema {
  protected tableName = 'curriculos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_completo')
      table.string('cargo')
      table.date('data_nascimento')
      table.enum('estado_civil', ['nao-informado', 'solteiro', 'casado', 'divorciado', 'separado'])
      table.enum('sexo', ['nao-informado', 'feminino', 'masculino'])
      table.string('cep')
      table.string('cidade')
      table.string('estado')
      table.string('logradouro')
      table.string('numero')
      table.string('complemento')
      table.string('bairro')
      table.string('telefone_fixo1')
      table.string('telefone_fixo2')
      table.string('celular')
      table.string('contato')
      table.string('email').unique().notNullable()
      table.string('identidade')
      table.string('cpf').unique().notNullable()
      table.enum('possui_veiculo', ['sim', 'nao'])
      table.enum('habilitacao', ['sim', 'nao', 'em-processo'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
