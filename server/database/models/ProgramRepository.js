const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "program" });
  }

  // The C of CRUD - Create operation

  async readAll() {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the ID of the newly inserted item
    return rows;
  }

  // The Rs of CRUD - Read operations

  
}

module.exports = ProgramRepository;
