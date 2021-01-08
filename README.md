# calendrier
the main goal of this projet is to implement a personalized calendar in which we can place the date and title of the events.firebase is the chosen backend for obvious reasons.
This application is usable on cellphones and laptops.
to apply such projet, i chose to use ionic-angular as framework. to do so there is diffrent requirements to satisfy.

first, you have to creat a new ionic project, open this link to follow the simple steps:

https://ionicframework.com/docs/cli/commands/start

second, you have to install several packages in this order :

npm install -g ionic

npm install ionic2-calendar

ionic serve -b -c

npm install angularfire2 firebase promise-polyfill

npm install rxjs@6 rxjs-compat@6  promise-polyfill

most of the explaination is in this urls :

https://www.npmjs.com/package/ionic2-calendar

https://firebase.google.com/docs/android/setup

https://www.npmjs.com/package/@firebase/firestore

to setup the backend open this link:
https://firebase.google.com/docs/database/android/start

to download or clone my projet to have a better understanding use this command line :
run npm i ,from the project directory to install its dependencies.

it's important to note that my actuall version of my projet is far from done and really pleased if you devolep further my projet, namelly :
include an authentification system,
fix some problems related to creating a new event.
