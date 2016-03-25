# React Redux CRUD App

#Live App
<a href="https://draftjs-examples.herokuapp.com/" target="_blank">https://draftjs-examples.herokuapp.com/</a>



#Running On Heroku
You can create your own version of the app (including MongoDB!)
<br/>
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#Local Installation
1. Install <a href="https://nodejs.org" target="_blank">Node.js</a> 
3. `git clone https://github.com/rajaraodv/draftjs-examples.git`
4. `cd draftjs-examples`
5. `npm install`


#Running Locally
*You need two terminal windows open*, one for client and the other for server.

####Development
1. run `npm start`. This runs the app server (Express). 
2. In terminal 2, run: `npm run dev`. This runs the development server(webpack-dev-server).
3. Open browser and go to: `localhost:8080`

#####Note: If you open `localhost:3000` in browser, you'll see a "stale" production app, so while in development, **always go to `localhost:8080`**

####Production
In production, we need to compile the **latest** client js and place it to `public` folder. This allows the main app server(Express) to also show the final app.

1. Generate latest React app: `npm run build`.
2. In terminal 1, run `npm start`. It will be running both the server and the client.
3. Open browser and go to : `localhost:3000`.



#Manually Pushing To Heroku
Running your own instance on <a href="https://heroku.com">Heroku</a>.

1. `git clone https://github.com/rajaraodv/react-redux-blog.git`
2. `cd react-redux-blog`
3. `heroku login` (enter heroku credentials)
4. `heroku init`
5. `heroku create` 
6. `git push heroku master`


###Making changes to your app and pushing it to Heroku
Everytime you make changes to the front end, you need to build it, and do git commit before pushing it to Heroku test server.

1. `npm run build` #build new React app JS
2. `git add .` #Add change to git
3. `git commit -m "<your comment>"` 
4. `git push heroku master`
5. `heroku open`

I usually have something like below that combines all the steps. I just change the commit message everytime.

`npm run build && git add . && git commit -m "made changes" && git push heroku master && heroku open`

# Contributing A New Draft.JS Example
1. Create your Editor component in `/public/src/components` folder
2. Add the component to `/public/src/pages/Examples`
3. If you need to add any stylesheets, add it to `/public/style`
	1. Make sure to use classnames that are unique so it doesn't conflict w/ other examples.



#LICENSE
MIT

