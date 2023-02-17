


const template = `<!DOCTYPE html>
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

  <section id= "managerSec" class="row justify-content-center my-5 gap-3 ">
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card">
        <div class="card-header bg-black text-white">
          <h5 id="managerName" >${this.name}</h5>
          <h6>Manager</h6>
        </div>
        <div class="card-body">
          <ul id="managerId" >ID: </ul>
          <ul id="managerEmail" >Email: </ul>
          <ul id="managerNum" >Office Number: </ul>
        </div>
      </div>
    </div>   
</section>

<section id= "engineerSec" class="row justify-content-center my-5 gap-3 ">    
  <div class="col-12 col-sm-6 col-lg-4">
    <div class="card">
      <div class="card-header bg-secondary text-white">
        <h5 id=" engineerName">Name</h5>
        <h6>Engineer</h6>
      </div>
      <div class="card-body">
        <ul id="engineerId" >ID: </ul>
        <ul id="engineerEmail" >Email: </ul>
        <ul id="engineerGh" >Github: </ul>
      </div>
    </div>
  </div>   
</section>

<section id= "internSec" class="row justify-content-center my-5 gap-3 ">    
  <div class="col-12 col-sm-6 col-lg-4">
    <div class="card">
      <div class="card-header bg-light">
        <h5 id="internName">Name</h5>
        <h6>Intern</h6>
      </div>
      <div class="card-body">
        <ul id="internId" >ID: </ul>
        <ul id="internEmail" >Email: </ul>
        <ul id="internSchool" >School: </ul>
      </div>
    </div>
  </div>
</section>
</body>
</html>`





module.exports = template