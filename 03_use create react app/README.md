## Set React Env (with linux) 
* update node version:
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```
in ubuntu run also:
```bash
sudo apt-get install --reinstall nodejs-legacy     # fix /usr/bin/node
```
* check node version:
```
node --version
```
* update npm version:
```
sudo npm install -g npm 
```
* check npm version:
```
npm --version
```
* install yarn
```
sudo npm install -g yarn
sudo yarn cache clean
```
* create new react app
```
npx create-react-app my-app
cd my-app
```
* run app (dev mod)
```
# development build (not optimized), view in http://localhost:3000
yarn start 
```
* run app (prod mod)
```
# To create a production build, use yarn build.
sudo yarn build
```







