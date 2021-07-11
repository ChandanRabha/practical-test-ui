# practical-test-ui
Practical Test Project

Steps to run the Project.
1) In the project directory run  => <b>npm i </b> to install dependencies for node 
2) Navigate to the client folder and run =>  <b>npm i </b> to install dependencies for react and redux
3)  Node Server is running in PORT 3001 and React is running on Port 3000 and proxied to Port 3001.This will allow us to make requests to our Node server without having to provide the origin it is running on (http://localhost:3001) every time we make a network request to it.
4) To run node server navigate to project root directory and run => <b> npm start </b>
5) To run the react front end navigate to the client folder and run => <b> npm start </b>
6) In your browser url type <b>localhost:3000</b> to access the project.

Information regarding the Project.
1) In the landing page the  API hardcoded responses in intervals is displayed on the console.
2) The Application is mobile responsive.
3) Second Page is navigated from the Go Back link on the upper left side of the page. 
4) To go back to the Landing Page the go back button can be used in the Second Page.
5) For the dynamic input fields the Second Page is used.
6)The plus button will add more fields.
7) All input fields have is empty field validation
8) To confirm the form data has been sent to NODE  the response output is shown in the console after the click of Submit button.
9) All the input data submitted to the node on response returns the same data.
10) The response data is saved to the Redux store after the click of submit.
11) To confirm data has been saved in the store the useSelector hook is used and consoled.
