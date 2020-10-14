import { Model } from 'objection'

import { baseModel } from './index'
import Projects from './Projects'
import NaversProjects from './NaversProjects'

class Navers extends baseModel {
  static tableName = 'navers'

  static relationMappings = {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Projects,
        join: {
          from: 'navers.id',
          through: {
            from: 'navers_projects.naver_id',
            to: 'navers_projects.project_id'
          },
          to: 'projects.id'
        }
      }
    }
  }

export default Navers
