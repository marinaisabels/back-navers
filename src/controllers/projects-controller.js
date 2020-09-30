import Projects from 'models/Projects'

export const index = () => Projects.query()

export const show = ctx =>
  Projects.query().findOne({ id: ctx.params.id })

export const create = async ctx => {
  const { body } = ctx.request

  return Projects.query().insert({
    name: body.name
  })
}

export const update = async ctx => {
  const { body } = ctx.request

  return Projects.query().patchAndFetchById(ctx.params.id, {
    name: body.name,
  
  })
}

export const destroy = ctx =>
  Projects.query().deleteById(ctx.state.navers.id).returning('*')

export default {
  index,
  create,
  show, 
  update, 
  destroy
}