// import { v4 } from 'uuid';

export const seed = async knex => {
  await knex('projects').del()
  await knex('projects').insert([
    {
    id: 1,  
    name: 'Projeto1',
    created_at: new Date(),
    updated_at: new Date()
    }
  ])
};