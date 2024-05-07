#! /usr/bin/env node

import inquirer from "inquirer"

let studentId : number = Math.floor(10000+Math.random()*90000);
//console.log(studentId);
let myBalance : number = 5000;


console.log("\n  \t WELCOME TO STUNENT MANAGEMENT SYSTEM \t  \n");

    let student = await inquirer.prompt(
        [
            {
                name:"students",
                type:"input",
                message:"Enter your name"
            }
        ]
    );
    if( student.students == "")  {
        
        console.log("Please enter a non empty name")}
    else{
      
        console.log(`Dear ${student.students} you are added in our system with ${studentId} ID`);

        const tutionFees : any={
            "HTML,CSS" : 3000,
            "JAVASCRIPT" : 4000,
            "TYPESCRIPT" :5000,
            "PYTHON" : 6000
        };
        console.log(`Dear ${student.students} the following courses are available:`)
        console.log(tutionFees);

        //console.log("Your Balance is : "+ myBalance);

        let courses = await inquirer.prompt(
            [
                {
                    name:"chooseCourse",
                    type:"list",
                    message:"Choose the course in which you want to get enrolled",
                    choices:["HTML,CSS","JAVASCRIPT","TYPESCRIPT","PYTHON"]
                },
                {
                    name:"payment",
                    type:"list",
                    message:"Select payment method",
                    choices:["Easypaisa","Bank Transfer","Jazz Cash"]
                },
                {
                    name:"payFees",
                    type:"input",
                    message:"Enter the amount"
                }
            ]
        );
        console.log(`TUTION FEES: ${tutionFees[courses.chooseCourse]}`);

    if(courses.payFees!=tutionFees[courses.chooseCourse]){
        console.log("You have entered wrong amount")
    }
        else{
            console.log(`You Select Payment Method: ${courses.payment}`)
       
       
    if(courses.payFees <= myBalance){
        console.log("Your fees has been successfully paid")
        
        console.log(`Your remaining balance is: ${myBalance-courses.payFees}`)
        let next = await inquirer.prompt(
            [
                {name:"further",
                type:"list",
                message:"what to do next",
                choices:["Exit",'View Status']  
                }
            ]
        );
        if(next.further=="Exit"){
            console.log("Exiting Student Management System");
                 console.log("THANKYOU");
        }
        else if(next.further=="View Status"){
            console.log(`\n STATUS \n`);
            console.log(`Student Name: ${student.students}`);
            console.log(`Student ID: ${studentId}`);
            console.log(`Course: ${courses.chooseCourse}`);
            console.log(`Tution Fees Paid: ${courses.payFees}`);
            console.log(`Balance: ${myBalance-courses.payFees}`);
            
        
        }
    } 
    else{
        console.log("Your balance is insufficient for this course")
    }
    }
}