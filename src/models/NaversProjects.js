import { Model } from 'objection'

import { baseModel } from './index'
import Navers from './Navers'
import Projects from './Projects'

class NaversProjects extends baseModel {
  static get tableName() {
    return 'navers_projects'
  }

  static relationMappings = {
    navers: {
      relation: Model.HasOne,
      modelClass: Navers,
      join: {
        from: 'navers_projects.id',
        through: {
          from: 'navers_projects.naver_id',
          to: 'navers.id'
        }
      },
      projects: {
        relation: Model.HasOne,
        modelClass: Projects,
        join: {
          from: 'navers_projects.id',
          through: {
            from: 'navers_projects.project_id',
            to: 'projects.id'
          }
        }
      }
    }
  }
}
export default NaversProjects