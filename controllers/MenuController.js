const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get date",
          "Get contact count",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main() {
    console.log(`Welcome to Contact Book!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
          break;
        case "Get contact count":
          this.getContactCount();
          this.main();
          break;
        case "Get date":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear() {
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getContactCount() {
    console.log(this.contacts.length);
    return this.contacts.length;
  }

  getDate() {
    const d = new Date();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    let hours = d.getHours();
    const ampm = hours > 11 ? "p.m." : "a.m.";
    hours > 12 ? hours = hours - 12 : hours = hours;
    const minutes = d.getMinutes();
    const printDate = month + "/" + day + "/" + year + " " + hours + ":" + minutes + " " + ampm;
    console.log(`Current date and time: ${printDate}`);
    this.main();
  }

  exit() {
    console.log("Thanks for using Contact Book!");
    process.exit();
  }
}
