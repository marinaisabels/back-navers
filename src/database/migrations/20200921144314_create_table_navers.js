export const up = knex => 
    knex.schema
    .createTable('navers', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.date('birthdate').notNullable()
        table.string('job_role').notNullable()
        table.date('admission_date').notNullable()

      table.timestamps(true, true)
    })

export const down = knex => 
    knex.schema.dropTableIfExists('navers')   
