import NaversProjects from 'models/NaversProjects'

export const index = () => NaversProjects.query()

export const show = ctx =>
  NaversProjects.query().findOne({ id: ctx.params.id })
  
export default {
  index,
  show
}