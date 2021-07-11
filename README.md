# practical-test-ui
## Practical Test Project

### Steps to run the Project.'
i) Extract the project folder 
1) In the project directory run  => <b>npm i </b> to install dependencies for node 
2) Navigate to the client folder and run =>  <b>npm i </b> to install dependencies for react and redux
3)  Node Server is running in <b>PORT 3001</b> and React is running on <b>Port 3000</b> and proxied to Port 3001.This will allow us to make requests to our Node server without having to provide the origin it is running on (http://localhost:3001) every time we make a network request to it.
4) To run node server navigate to project root directory and run => <b> npm start </b>
5) To run the react front end navigate to the client folder and run => <b> npm start </b>
6) In your browser url type <b>localhost:3000</b> to access the project.

### Information regarding the Project.
1) In the landing page the  API hardcoded responses in intervals is <b>displayed on the console</b>.
2) The Application is <b>mobile responsive</b>.
3) Second Page is navigated from the <b>Go Back link</b> on the upper left side of the page. 
4) To go back to the Landing Page the <b>go back</b> button can be used in the Second Page.
5) For the <b>dynamic input fields</b> the Second Page is used.
6)The <b>plus button</b> will add more fields.
7) All input fields have an <b>empty field form validation</b>.
8) To confirm the form data has been sent to NODE  the <b>response output is shown in the console</b> after the click of <b>Submit button</b>.
9) All the input data submitted to the node on response returns the same data.
10) The response data is saved to the <b>Redux store</b> after the click of submit.
11) To confirm data has been saved in the store the <b>useSelector hook</b> is used and consoled.
