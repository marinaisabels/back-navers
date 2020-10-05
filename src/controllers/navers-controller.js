import Navers from 'models/Navers'

export const index = () => Navers.query()

export const show = ctx =>
  Navers.query().findOne({ id: ctx.params.id})
    .select(
      'navers.id',
      'navers.name',
      'navers.birthdate',
      'navers.admission_date',
      'navers.job_role',
      'p.id',
      'p.name')
    .innerJoin('navers_projects', {'navers_projects.id_naver': 'navers.id'})
    .innerJoin('projects AS p', {'navers_projects.id_projects': 'p.id'})

export const create = async ctx => {
  const { body } = ctx.request

  return Navers.query().insert({
    name: body.name,
    birthdate: body.birthdate,
    admission_date: body.admission_date,
    job_role: body.job_role
  })
}

export const update = async ctx => {
  const { body } = ctx.request

  return Navers.query().patchAndFetchById(ctx.params.id, {
    name: body.name,
    birthdate: body.birthdate,
    admission_date: body.admission_date,
    job_role: body.job_role
  })
}

export const destroy = ctx =>
  Navers.query().deleteById(ctx.param.id).returning('*')

export default {
  index,
  create,
  show,
  update,
  destroy
}