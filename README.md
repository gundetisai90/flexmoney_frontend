<h3>This repository contains the assignment for internship, developed using MERN stack.</h3>
<hr/>
<h4>It is basically a web app for yoga class registrations.
The website contains the form which takes user information and payment details and register them if payment is successful.</h4>
<h3>The Tech Stack used is :- </h3>
<ul>
<li> Node.js
<li> Express.js
<li> MongoDB
<li> React.js
</ul>
<h3>The project has the following steps :- </h3>
<li> Registration :- User Fill in his basic details
<li> Validations :- The user data is validates according to the rules.
<li> If the data is valid, it is updates in the database annd user is informed.
<li> If the data is invalid, user is informed about the posibble errors and asked to rectify them.
<li> database storage & confirmation :- After SuccessFul Payment, A confirmation in shon to user in form of Alerts and Also the data is pushed to the database.

<h3> Some Important points :- </h3>
<li> The age of the person registering must be between 18 - 65.
<li> transaction amount must be 500/-

<h3>Some Assumptions :- </h3> 
<li>No login authentication is needed
<li> User simply register and pays and gets his slot.
<li> Assume that you have a mock function named CompletePayment() which accepts the
details of user & payment & does the payment for you.
<li> As soon as payment button is clicked, payment will be successful.
<li> The Validity of one slot booking is 1 month, So a user need not register himself for the period of one month.
<li> Payment details (account number, cvv) are not stored in database, just shown on the frontend.

 <h3> Steps to run the project </h3>
  <li> clone the repo
    <li> Run :- run npm i
      <li> Run :- npm run both
