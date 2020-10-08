import { Model } from 'objection'

import Role from './Role'
import { baseModel} from './index'
import NaversProjects from './NaversProjects'

class Navers extends baseModel {
  static tableName = 'navers'

  static relationMapings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: NaversProjects,
      join: {
        from: 'navers.id',
        to: 'navers_projects.naver_id'
      }
    }
  }
}

export default Navers
