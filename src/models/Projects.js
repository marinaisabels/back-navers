import { Model } from 'objection'

import { baseModel} from './index'

import NaversProjects from './NaversProjects'

class Projects extends baseModel {
  static tableName = 'projects'

  static relationMapings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: NaversProjects,
      join: {
        from: 'projects.id',
        to: 'navers_projects.project_id'
      }
    }
  }
}

export default Projects