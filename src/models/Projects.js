import { Model } from 'objection'

import { baseModel } from './index'
import Navers from './Navers'


class Projects extends baseModel {
  static tableName = 'projects'

  static relationMappings = {
      navers: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Navers',
        join: {
          from: 'projects.id',
          through: {
            from: 'navers_projects.project_id',
            to: 'navers_projects.naver_id'
          },
          to: 'navers.id'
        }
      }
    }
  }

export default Projects