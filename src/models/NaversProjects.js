import { Model } from 'objection'

import Navers from './Navers'
import Projects from './Projects'

import { baseModel} from './index'

class NaversProjects extends baseModel {
  static tableName = 'navers_projects'

  static relationMapings = {
    role: {
      relation: Model.ManyToManyRelation,
      modelClass: Navers,
      modelClass:Projects,
      join: {
        from: 'navers_projects.naver_id',
        to: 'navers.id'
      },
      join: {
        from: 'navers_projects.project_id',
        to: 'projects.id'
      }
    }
  }
}

export default NaversProjects