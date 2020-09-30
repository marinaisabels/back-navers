export const up = knex =>
  knex.schema
    .createTable('navers_projects', table => {
      table.increments('id').primary()
      table.integer('id_naver').unsigned().references('navers.id').onDelete('CASCADE')
      table.integer('id_projects').unsigned().references('projects.id').onDelete('CASCADE')

      table.timestamps(true, true)
    })

export const down = knex =>
  knex.schema.dropTableIfExists('navers_projects')
