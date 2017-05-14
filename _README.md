The Trov App:

A realtime geoadventure quest game.

Team:
-Brandon Brown
-Jake Holtz
-Ashwin Narasimhan,
-Jon Michael Stewart


1. Usage

  This app allows a user to select a geo-adventure (a trov) and follow hints to the challenge destinations.  Each trov is comprised of several challenges, each with its own unique geo-coordinates (longitude and latitude).  Upon arriving at the destination, the app compares the challenge coordinates to current user coordinates and will register success if within range, and reveal the next hint.


2. Requirements

-Node/Express
-React
-Google Maps API account/key
-AWS or other external database (Mysql)
-Facebook SDK/devkit account and app ID


3. Development

  a) Installing Dependencies
    From three separate terminal windows in the root directory:
    i. npm install
    ii.  npm run dev
    iii. npm start

  b) Tasks
    i. Create a Google Maps API key
    ii. Create an AWS Mysql database instance
    iii.  Create a Facebook SDK and app ID


4. Roadmap

  a) Server
    i. app.js: 
      -kicks off the express server
      -applies some helpful middleware
      -serves the main client files thru express.static
      -routes other requests to server/server.js
    ii. server.js:
      -handles all requests for db queries
      -returns everything the client needs
    iii. db.js:
      -creates the database connection and exports it

  b) Client
    i. index.html:
      -loads stylesheet, bootstrap styles, bootstrap, jquery, fonts, Google Maps API
      -creates the 'app' element for React
      -loads the React bundle from server
    ii. components/index.js:
      -on mount, checks the db for user login status (via axios)
      -handles high-level login and user states
      -renders some of the consistent components (header and sidebar)
      -renders main.js and passes key states 
    iii. main.js
      -the central component, handles trov and current trov states
      -conditionally renders stages of the app depending on user states
        ->VisitorMain: not logged in - this is the welcome page
        ->UserNoTrovMain: logged in, not currently on trov - users select a trov here
        ->TrovMain: logged in, currently on trov (and progressing through challenges) - this has the algorithm that checks if current location is successful
      -on mount, gets current location and sets it to window.loc
      -on mount, queries db for all available trovs


5. Contributing



