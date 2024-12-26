###SETUP
1. setup fnm from vercel, then node 22, then use ionic to setup angular

2. download and install Node.js
fnm install 22

3. verifies the right Node.js version is in the environment
node -v # should print "v22.12.0"

4. verifies the right npm version is in the environment
npm -v # should print "10.9.0"

5. ionic cli -> angular cli
npm install -g @ionic/cli

6. ask ionic to start which will ask for angular cli install
ionic serve # start dev service

7. prod build -> delivers o/p @ ./www - can be served via apache / nginx
ionic build --prod

8. move this above o/p www to nginx and nginx should serve the index.html
