export const up = knex => 
    knex.schema
    .createTable('navers', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.date('birthdate').notNullable()
        table.date('admission_date').notNullable()
        table.string('job_role').notNullable()
        table.integer('project').unsigned().notNullable()
        // table
        // .foreign('project_id')
        // .references('id')
        // .inTable('navers_projects')
        // .onDelete('CASCADE')
    })

export const down = knex => 
    knex.schema.dropTableIfExists('navers')