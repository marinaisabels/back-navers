import Navers from 'models/Navers'

export const index = () => Navers.query()

export const show = ctx => 
 Navers.query().findOne({ id:ctx.params.id })
 .withGraphFetched('projects')

export const create = async ctx => {
  const { body } = ctx.request

  Navers.query().insertGraph({
    name: body.name,
    birthdate: body.birthdate,
    admission_date: body.admission_date,
    job_role: body.job_role
  })
  return  Navers.relatedQuery('navers_projects').for(1).insert({id: 3, project_id: 1})

}

export const update = async ctx => {
  const { body } = ctx.request

  return Navers.query().patchAndFetchById(ctx.params.id, {
    name: body.name,
    birthdate: body.birthdate,
    admission_date: body.admission_date,
    job_role: body.job_role,
    project: body.project
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

