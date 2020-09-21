import Projects from 'models/Projects'

export const index = () => Projects.query()

export const show = ctx =>
  Projects.query().findOne({ id: ctx.params.id })
  
export const create = async ctx => {
  const { body } = ctx.request

  return Projects.query().insert({
    name: body.name,
  })
}

export default {
  index,
  create,
  show
}