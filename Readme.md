<h1>Hospital API - Backend</h1>
<p>This project is a Hospital API for managing doctors and patients. The backend is developed using Node.js and controlled by Postman. The API provides functionalities for doctors to login, patients to register, and doctors to create reports for their patients. user can also filter their reports based on their patient ID or status.</p>

<ul>
   <h3>Technologies Used</h3>
   <li>Node.js</li>
   <li>Express.js</li>
   <li>MongoDB</li>
   <li>Mongoose</li>
   <li>JWT</li>
</ul>

<ul>
   <h3>Routes</h3>
   <li>/doctors/register</li>
   <p>Doctors Register with username and password username always be a unique</p>
   <li>/doctors/login</li>
   <p>Returns a JWT token on the doctor successful login.</p>
   <li>/patients/register</li>
   <p>Patients Register using username and Phone Number Phone Number always be a unique</p>
   <li>/patients/create-report</li>
   <p>Doctor Create Patient report and This route take id as a form of Query/Params/etc and this routed Authenticated by JWT when the report will be generated only when the doctor is logged in.</p>
   <li>patientsAllReport</li>
   <p>User Also filter Report according patients </p>
   <li>findAllReport</li>
   <p>You can find All Report according to report Status</p>
</ul>

