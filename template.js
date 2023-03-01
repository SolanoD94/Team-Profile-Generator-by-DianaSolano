
//Generate HTML
const frontEnd = (theCrew) => {

  const createManager = (manager) => {
    return `

    <section id= "managerSec" class="row justify-content-center my-5 gap-3 ">
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card">
        <div class="card-header bg-black text-white">
          <h5 id="managerName" >${manager.getName()}</h5>
          <h6>Manager</h6>
        </div>
        <div class="card-body">
          <ul id="managerId" >ID: ${manager.getId()}</ul>
          <ul id="managerEmail" >Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></ul>
          <ul id="managerNum" >Office Number: ${manager.getOfficeNumber()}</ul>
        </div>
      </div>
    </div>   
    </section>
    
    `
  };

  const createEngineer = (engineer) => {
    return `

    <section id= "engineerSec" class="row justify-content-center my-5 gap-3 ">    
  <div class="col-12 col-sm-6 col-lg-4">
    <div class="card">
      <div class="card-header bg-secondary text-white">
        <h5 id=" engineerName">${engineer.getName()}</h5>
        <h6>Engineer</h6>
      </div>
      <div class="card-body">
        <ul id="engineerId" >ID: ${engineer.getId()}</ul>
        <ul id="engineerEmail" >Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></ul>
        <ul id="engineerGh" >Github: ${engineer.getGitHub()}</ul>
      </div>
    </div>
    </div>   
    </section>
    
    `
  };

  const createIntern = (intern) => {
    return `

    <section id= "internSec" class="row justify-content-center my-5 gap-3 ">    
  <div class="col-12 col-sm-6 col-lg-4">
    <div class="card">
      <div class="card-header bg-light">
        <h5 id="internName">${intern.getName()}</h5>
        <h6>Intern</h6>
      </div>
      <div class="card-body">
        <ul id="internId" >ID: ${intern.getId()}</ul>
        <ul id="internEmail" >Email:  <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></ul>
        <ul id="internSchool" >School: ${intern.getSchool()}</ul>
      </div>
    </div>
    </div>
    </section>
    
    `
  };

  const team = [];
  team.push(
    theCrew
    .filter((Employee) => Employee.getRole() === "Manager")
    .map((manager) => createManager(manager))
  );
  team.push(
    theCrew
    .filter((Employee) => Employee.getRole() === "Engineer")
    .map((engineer) => createEngineer(engineer))
    .join("")
  );
  team.push(
    theCrew
    .filter((Employee) => Employee.getRole() === "Intern")
    .map((intern) => createIntern(intern))
    .join("")
  );

  return team.join("");
} 

 module.exports = (theCrew) =>
  {return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Companie's Team Profile</title>
  </head>
  <header>
  <nav class="navbar bg-primary p-3">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1 text-white">The Crew</span>
    </div>
  </nav>
  </header>
  <body>
  ${frontEnd(theCrew)}
  </body>
  </html>
`};