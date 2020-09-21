import { Model } from 'objection'

import Role from './Role'
import { baseModel} from './index'

class NaversProjects extends baseModel {
  static tableName = 'navers_projects'

  static relationMapings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: Role,
      join: {
        from: 'navers_projects.role_id',
        to: 'roles.id'
      }
    }
  }
}

export default NaversProjects