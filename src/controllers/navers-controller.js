import Navers from 'models/Navers'


export const index = () => Navers.query()

export const show = ctx => 
 Navers.query().withGraphFetched('projects')
.findOne({ id:ctx.params.id })


      // .select(
      //   'navers.id',
      //   'navers.name',
      //   'navers.birthdate',
      //   'navers.admission_date',
      //   'navers.job_role',
      //   'projects.id as id_project',
      //   'projects.name as project'
      // )
      // .innerJoin('navers_projects', {'navers_projects.naver_id': 'navers.id'})
      // .innerJoin('projects', {'navers_projects.project_id': 'projects.id'})

export const create = async ctx => {
  const { body } = ctx.request

  return Navers.query().insert({
    name: body.name,
    birthdate: body.birthdate,
    admission_date: body.admission_date,
    job_role: body.job_role,
    projects: body.projects
  })
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

