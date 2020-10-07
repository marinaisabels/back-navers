
export const up = knex =>
  knex.schema
    .createTable('projects', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.integer('naver_id').unsigned().notNullable()
      table
        .foreign('naver_id')
        .references('id')
        .inTable('navers')
        .onDelete('CASCADE')
    })

export const down = knex =>
  knex.schema.dropTableIfExists('projects')