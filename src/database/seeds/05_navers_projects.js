export const seed = async knex => {
  await knex('navers_projects').del()
  await knex('navers_projects').insert([
    {
    id: 1,  
    id_naver: 1 ,
    id_projects: 1,
    created_at: new Date(),
    updated_at: new Date()
    }
  ])
};