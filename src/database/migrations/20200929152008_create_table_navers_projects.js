export const up = knex =>
  knex.schema
    .createTable('navers_projects', table => {
      table.increments('id').primary()
      table.integer('id_naver').unsigned().notNullable()
      table.integer('id_projects').unsigned().notNullable()
      table.foreign('id_naver').references('id').inTable('navers').onDelete('CASCADE')
      table.foreign('id_projects').references('id').inTable('projects').onDelete('CASCADE')
    })

export const down = knex =>
  knex.schema.dropTableIfExists('navers_projects')
