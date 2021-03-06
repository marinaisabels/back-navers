
export const up = knex =>
  knex.schema
    .createTable('projects', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
    })

export const down = knex =>
  knex.schema.dropTableIfExists('projects')