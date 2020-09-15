import { Model } from 'objection'

import Role from './Role'
import { baseModel} from './index'

class Navers extends baseModel {
  static tableName = 'navers'

  static relationMapings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: Role,
      join: {
        from: 'navers.role_id',
        to: 'roles.id'
      }
    }
  }
}

export default Navers
