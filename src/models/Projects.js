import { Model } from 'objection'

import Role from './Role'
import { baseModel} from './index'

class Projects extends baseModel {
  static tableName = 'projects'

  static relationMapings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: Role,
      join: {
        from: 'projects.role_id',
        to: 'roles.id'
      }
    }
  }
}

export default Projects