# React Redux CRUD App

#Live App
https://draftjs-examples.herokuapp.com/



#Running On Heroku
You can create your own version of the app (including MongoDB!)
<br/>
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#Local Installation
1. Install <a href="https://nodejs.org" target="_blank">Node.js</a> 
2. Install <a target="_blank" href="https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew">MongoDB</a>
3. `git clone https://github.com/rajaraodv/react-redux-blog.git`
4. `cd react-redux-blog`
5. `npm install`
6. Create a free <a href="https://postmarkapp.com" target="_blank">PostMark</a> account for sending (confirm email, forgot pwd) emails.
  * Export Postmark credentials to environment
  * `export POSTMARK_API_TOKEN=<getApiTokenFromWInPostmark>`
  * Alternatively, you can run the app on Heroku, add Postmark addon (which adds a free account and sets `POSTMARK_API_TOKEN` to the app running on Heroku). You can then get that `POSTMARK_API_TOKEN` by running: `heroku config:get POSTMARK_API_TOKEN` and then export the token to the terminal. This will now allow you to send email from localhost.

####Preventing Emails From Getting Blocked by GMail, Yahoo etc.
NOTE: In order to send email via PostMark or Sendgrid, you need to verify sender's email(from address). In PostMark you can do that by setting your company or other private email(e.g. raja@rao.com) and verifying that. Then you can use **THAT** company or private email(e.g. raja@rao.com) in the FROM address.


#Running Locally
*You need two terminal windows open*, one for client and the other for server.

####Development
1. In terminal 1, 
	1. `export JWT_SECRET=somesecretstring` <-- This is used to generate JWT tokens.
	2. `export POSTMARK_API_TOKEN=<getApiTokenFromWInPostmark>` <-- Email
	3. `export FROM_EMAIL=<yourFromEmailThatIsRegisteredInPostMark> <-- "From"-Email Address
	4. run `npm start`. This runs the app server (Express). 
2. In terminal 2, run: `npm run dev`. This runs the development server(webpack-dev-server).
3. Open browser and go to: `localhost:8080`

#####Note: If you open `localhost:3000` in browser, you'll see a "stale" production app, so while in development, **always go to `localhost:8080`**

####Production
In production, we need to compile the **latest** client js and place it to `public` folder. This allows the main app server(Express) to also show the final app.

1. Generate latest React app: `npm run build`.
2. In terminal 1, run `npm start`. It will be running both the server and the client.
3. Open browser and go to : `localhost:3000`.



#Cloning Locally And Pushing To Heroku
Running your own instance on <a href="https://heroku.com">Heroku</a>.

1. `git clone https://github.com/rajaraodv/react-redux-blog.git`
2. `cd react-redux-blog`
3. `heroku login` (enter heroku credentials)
4. `heroku init`
5. `heroku create` 
6. `heroku addons:create mongolab`  <-- Add Mongolab test DB (free tier)
7. `heroku addons:create postmark:10k` <-- Postmark Email (free tier)
8. `git push heroku master`


###Making changes to your app and pushing it to Heroku
Everytime you make changes to the front end, you need to build it, and do git commit before pushing it to Heroku test server.

1. `npm run build` #build new React app JS
2. `git add .` #Add change to git
3. `git commit -m "<your comment>" 
4. `git push heroku master`
5. `heroku open`

I usually have something like below that combines all the steps. I just change the commit message everytime.

`npm run build && git add . && git commit -m "made changes" && git push heroku master && heroku open`




