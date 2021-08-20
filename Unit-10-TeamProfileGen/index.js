var fs = require("fs");
var inquirer = require("inquirer"); 


var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var Manager = require("./lib/Manager");
var employees = [];

var buildTeam = require("./dist/render");

var firstQuestions = [
    {
      type: "list",
      message: "Add an employee or build the team?",
      choices: ["Engineer", "Intern", "Manager", "Form the team"],
      name: "create",
    },
  ];

  var managerOptionQuestions = [
    {
      type: "input",
      message: "What is the managers name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the managers ID?",
      name: "ID",
    },
    {
      type: "input",
      message: "What is the manager email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the office number?",
      name: "officeNumber",
    },
  ];
  var engineerOptionQuestions = [
    {
      type: "input",
      message: "What is the engineers name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineers ID?",
      name: "ID",
    },
    {
      type: "input",
      message: "What is the engineers email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineers Github username?",
      name: "github",
    },
  ];
  var internOptionQuestions = [
    {
      type: "input",
      message: "What is the interns name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the interns ID?",
      name: "ID",
    },
    {
      type: "input",
      message: "What is the interns email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the interns school?",
      name: "school",
    },
  ];
  
  function pickAnEmployee() {
    inquirer.prompt(firstQuestions).then((answers) => {
      if (answers.create === "Engineer") {
        engineer();
      } else if (answers.create === "Intern") {
        intern();
      } else if (answers.create === "Manager"){
        manager();
      }
      else {
        buildTeamHtml();
      }
    });
  }

  function manager() {
    inquirer.prompt(managerOptionQuestions).then((answers) => {
      var manager = new Manager(
        answers.name,
        answers.ID,
        answers.email,
        answers.officeNumber
      );
      employees.push(manager);
      pickAnEmployee();
    });
  }

  function engineer() {
    inquirer.prompt(engineerOptionQuestions).then((answers) => {
      var engineer = new Engineer(
        answers.name,
        answers.ID,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      pickAnEmployee();
    });
  }
  function intern() {
    inquirer.prompt(internOptionQuestions).then((answers) => {
      var intern = new Intern(
        answers.name,
        answers.ID,
        answers.email,
        answers.school
      );
      employees.push(intern);
      pickAnEmployee();
    });
  }

  function buildTeamHtml() {
    var html = buildTeam(employees);
  
    fs.writeFile("myTeam.html", html, (err) =>
      err ? console.log(err) : console.log("Team.html has been created! Check it out :)")
    );
  }
  pickAnEmployee();
  