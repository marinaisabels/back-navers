export const up = knex =>
  knex.schema
    .createTable('navers_projects', table => {
      table.increments('id').primary()
      table.integer('naver_id').unsigned().notNullable()
      table.foreign('naver_id').references('id').inTable('navers').onDelete('CASCADE')

      table.integer('project_id').unsigned().notNullable()
      table.foreign('project_id').references('id').inTable('projects').onDelete('CASCADE')
    })

export const down = knex =>
  knex.schema.dropTableIfExists('navers_projects')
