import Navers from 'models/Navers'

export const index = () => Navers.query()

export const show = ctx =>
  Navers.query().findOne({ id: ctx.params.id })
  
export const create = async ctx => {
  const { body } = ctx.request

  return Navers.query().insert({
    name: body.name,
    birthdate: body.birthdate,
    job_role: body.job_role,
    admission_date: body.admission_date,
    projects: body.projects,
  })
}

export default {
  index,
  create,
  show
}