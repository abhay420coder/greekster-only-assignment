// take input n from user and print anumbers in reverse order



 var num = prompt (" enter the number how much you Want ")
 num = parseInt(num)


 
 for ( let i=num;i>0;i-- )
 {
     console.log(i)
 }//  write a programme to print all prime numbers in range  1 to n . take n from the user 

var num = prompt("enetr a number")
num = parseInt(num)

// var expo = num ** 0.5
// expo = parseInt(expo)
// console.log (expo)

console.log (" the prime numbers between 1 to " + num, +  "are ")

if (isNaN (num))
 {
    alert("enter a valid number")
 }

else {
        // lopping from 1 to input 
        for (var i = 1 ; i < num ; i++ )
        {
            let flag = 0


            // loopping through 2 to user input number
            for( var j=2 ; j < i; j++)
            {
                if ( i%j == 0)
                {
                    flag=1
                    break;
                }
            }

            // if number greater than 1 and not divisible by other numbers
            if (i>1 && flag==0)
            {
                console.log(i)
            }
        }
     }





// var n1 = 0
// var n2 = 1

// if (isNaN (num))
//  {
//     alert("enter a valid number")
//  }

//  else
//  {

//  }