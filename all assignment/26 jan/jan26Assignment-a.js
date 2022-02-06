// take 3 numbers from the user and alert minimum of those three



// algorithm:-

// step 1 =>      take 3 input as A,B,C

// step 2 =>      check if ( A<=B && A<=C )
//                    {
//                        print A
//                    }

//                else if ( B<=B && B<=C )
//                    {
//                        print B
//                    }
//                 else
//                     print C
















//  console.log()  --> this will be display in console
// ex:-   console.log("enter first number:-")


//  alert()  	   -->  this creates popup and shows in the browser
// ex:-   alert("enter first number:-")


//  prompt()	   -->   this is used to take the input from a user

//           in prompt , we can give some hint text
// ex:-     prompt("enter first number:-")


// input always will be considerted as a string in JS
// whatever we input ...... JS considered that as a variable



// console.log(10 + 15)
// if we have two numbers     +    working as sum



// console.log(10 + "12")
// if we have one numbers and one string       +    working as concatination (combine both)
// in JS both numbers(10) and string(12) are considered as string . 
// so JS combine both


// if we want to convert string into  integer
// we have to -->  PARSE the string into an integer   -->       var_name = parseInt(var_name)
//  ex: parseInt(a) , parseInt(b1) , parseInt(b5)  , parseInt(b7) 














// take 3 numbers from the user and alert minimum of those three

var first = prompt("enter first number")
var second = prompt("enter second number")
var third = prompt("enter third number")

first= parseInt(first)
second= parseInt(second)
third= parseInt(third)



// method-1

// if(first>=second)
//  {
//      if(second>=third)
//      {
//          alert(" minimum number is " + third)
//      }
//      else
//      {
//          alert(" minimum number is "+ second)
//      }
//  }
 


//  else
//      {
//         if(first>=third)
//         {
//             alert(" minimum number is " + third)
//         }
        
//         {
//             alert(" minimum number is "+ first)
//         }
//      }


















// method-2




// if( first<=second && first<=third )
//  {
//     alert(" minimum number is " + first)
//  }
 


//  else if( second<=first && second<=third )
//         {
//             alert(" minimum number is " + second)
//         }



//  else 
//  {
//     alert(" minimum number is " + third)
//  }








// method-3


if(first<=second)
 {
     if(first<=third)
     {
         alert(" minimum number is " + first)
     }
     else
     {
         alert(" minimum number is "+ third)
     }
 }


 else 
 {   
    if(second<=third)
     {
         alert(" minimum number is " + second)
     }
     else
     {
         alert(" minimum number is "+ third)
     }
 }