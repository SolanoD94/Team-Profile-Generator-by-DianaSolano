const inquirer = require("inquirer");

class Team {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    inquirer
        .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Who is the manager?"
          }
    ])
  }

module.exports = Team;