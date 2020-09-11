import { v4 } from 'uuid'



export const seed = async knex => {
  await knex('navers').insert([
    {
      id: v4(),
      name: 'Nave Team',
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
