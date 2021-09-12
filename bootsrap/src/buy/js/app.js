import {package1, package2, package3, package4, package5, package6} from "../js/modules";

let portfolio = [
    person1 = {
        index: "1",
        name: "myName.name",
        age : "__",
        occupation: "frontend web dev",
        location: "Douala"
    },

    person2 = {
        index: "1",
        name: "myName.logo",
        age : "__",
        occupation: "backend web dev",
        location: "Douala"
    },

    person3 = {
        index: "1",
        name: "myName.svg",
        age : "__",
        occupation: "full stack web dev",
        location: "Douala"
    },

    person4 = {
        index: "1",
        name: "myName.com",
        age : "__",
        occupation: "web designer",
        location: "Douala"
    }
]

    // creating a function that takes in the names and returns them in the console
    const getPackage = () => {
        if(package1) {
            return console.log(portfolio[0]);
        }
       else if(package2) {
            return console.log(portfolio[1].name);
        } else if(package3) {
            return console.log(portfolio[person3]);
        } else if(package4) {
            return console.log(portfolio[2].age);
        } else if(package5) {
            return console.log(portfolio[person5]);
        } else if(package6) {
            return console.log(portfolio[person6]);
        }
    }

    console.log(portfolio[0].name)