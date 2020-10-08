export const seed = async knex => {
  await knex('projects').del()
  await knex('projects').insert([
    {
    id: 1,  
    name: 'Projeto 1',
    navers: 1
    }
  ])
};