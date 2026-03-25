const fs = require('fs')

const myWelcomeText = fs.readFileSync('./welcome.txt', 'utf-8')
console.log(myWelcomeText, "===> welcome");

fs.writeFileSync('./welcome.txt', 'Code Test Done! , file over-ride');