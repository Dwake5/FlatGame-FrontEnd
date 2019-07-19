<h1> FlatGame - Mod4 React Project </h1> 

<p> This project was made during module 4 at Flatiron School. The project specs were to build something using React with a Ruby on Rails backend. This was a pair project made in 5 days and presented to the office on the last day.</p>



<h3> Prerequisites </h3> 

<p> You can view and interact with this program by doing the following: </p>
<ul>
  <li> Press the clone or download button in the level above this repo</li>
  <li> Copy the text underneath where you just clicked or click the notepad with an arrow</li>
  <li> Navigate in your terminal to where you would like the project stored</li>
  <li> Type in 'git clone' + paste in the above and press enter</li>
  <li> cd into the folder you just made and open it in a text editor (type 'code .' for vscode)</li>
  <li> Now open up two terminals and cd into the backend in one and the frontend in the other</li>
  <li> In the back end terminal, type in bundle install ('bundle i' for short) + press enter, then rails server ('rails s' for short)</li>
  <li> In the frontend type 'npm install' ('npm i' for short) and then 'npm start' ('npm s' for short)</li> 
 </ul>


<h3> Built With </h3>

<p> The front end was built with React</p>
<p> The back end is made with Ruby on Rails </p>

<h3> Authors </h3>

<p> Danny Wakeling </p>
<a href="https://github.com/dwake5">Github</a>
<a href="https://www.linkedin.com/in/danny-wakeling1/">Linkedin</a>
<br></br>
<p> Nahit Abu-Nijaila </p>
<a href="https://github.com/Nahit-1">Github</a>


<h3> Features and code </h3>

<p> The project allows users to browse two hundred popular games. They can see their rating out of 100. A picture of the game and its genre's. Games can be sorted by genre, title, rating and search term. Any and all of these can work in tandem. </p>
<p> Users can click on a game to see previous comments others have left and add there own. These persist in the backend.<p>
<p> Two API's were chosen and then discarded before arriving at the final one. This was because we encountered many problems and thought it would save time in the long run. Some of the code in the frontend/services/api file is legacy and serves only to show what we can and have built. </p>
<p> We decided to pull games from an API that held tens of thousands of games, however when we tried to pull down more than two hundred it did not work, which is why we have a smallish amount. We did however in testing find that all the popular games at the moment were on there.</p>
 
<h3> Stretch goals </h3>

<p> Persisting star ratings, possibly have the star ratings affect the score the user see's.</p>


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
