export const up = knex =>
    knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS CITEXT')
        .createTable('navers', table => {
            table.increments('id').primary()
            table.string('role').notNullable()
        })
        .createTable('navers', table => {
            table.uuid('id').primary()
            table.string('name').notNullable()
            table.date('birthdate').notNullable()
            table.string('job_role').notNullable()
            table.date('admission_date').notNullable()
            table.string('projects').notNullable()
            table.timestamps(true, true)

            table.foreign('role_id').references('id').inTable('roles')
        })

export const down = knex =>
    knex.schema.dropTableIfExists('navers')    
    