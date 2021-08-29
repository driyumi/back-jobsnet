import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Curriculo from 'App/Models/Curriculo'

export default class CurriculosController {
  public async index ({}: HttpContextContract) {
    const data = await Curriculo.query()
      .select()
      .orderBy('id', 'desc');
    return data;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        'nome_completo',
        'cargo',
        'data_nascimento',
        'estado_civil',
        'sexo',
        'cep',
        'cidade',
        'estado',
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'telefone_fixo1',
        'telefone_fixo2',
        'celular',
        'contato',
        'email',
        'identidade',
        'cpf',
        'possui_veiculo',
        'habilitacao'
      ])

      /* verifica se o email já existe, mesmo com a verificação no banco de dados */
      const verify = await Curriculo.findBy('email', data.email);
      if (verify) {
        return response.status(409).send('Email já existente em nossos dados!');
      }

      /* verifica se o CPF já existe, mesmo com a verificação no banco de dados */
      const verifyCPF = await Curriculo.findBy('cpf', data.cpf);
      if (verifyCPF) {
        return response.status(409).send('CPF já existente em nossos dados!');
      }

      await Curriculo.create(data);

      return response.status(200).send('Currículo enviado com sucesso!');
    } catch (error) {
      return response.status(500).send(error);
    }
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
