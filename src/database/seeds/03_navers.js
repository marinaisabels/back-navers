export const seed = async knex => {
  await knex('navers').del()
  await knex('navers').insert([
    {
    id: 1,  
    name: 'Time Nave',
    birthdate: new Date(1990, 10, 10),
    admission_date: new Date(2015, 3, 1),
    job_role:'Backend', 
    projects: 9
    }
  ])
};
