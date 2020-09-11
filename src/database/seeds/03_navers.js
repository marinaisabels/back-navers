import { v4 } from 'uuid'



export const seed = async knex => {
  await knex('navers').insert([
    {
      role_id: admin,
      name: 'Nave Team',
      birthdate: new Date (1990, 10, 10), 
      job_role: 'Backend', 
      admission_date: new Date (2015, 01, 01), 
      projects: 'Projeto 1',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
