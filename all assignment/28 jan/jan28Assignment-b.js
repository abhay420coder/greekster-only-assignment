// print the first n numbers of a fibonacci series
//  0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34

var array_list = []


//  var num = prompt (" enter the number how much you Want ")
//  num = parseInt(num)

//  array_list.push(0)
//  array_list.push(1)





// if (num=1)
// {
//     console.log(array_list[0])
// }

// else if (num=2)
// {
//     console.log(array_list[0])
//     console.log(array_list[1])
// }

// else if (num>2)
//  {
//      for ( let i=2 ; i<num ; i++ )
//       {
//           array_list.push(array_list[i-2] + array_list[i-1] )
//           console.log(array_list[i-2] + array_list[i-1] )

//       }
//  }

//  else
//  {
//     console.log ("sorry for negative number") 
//  }




var num = prompt (" enter the number how much you Want ")
 num = parseInt(num)


var n1 = 0
var n2 = 1



// if (num=1)
// {
//     console.log(n1)
// }


// else if (num>=2)
//  {
     for ( let i=1 ; i<=num ; i++ )
      {
        console.log(n1)
        var next_term = n1+n2
        n1 = n2
        n2 = next_term

      }
 // }

//  else
//  {
//     console.log ("sorry for negative number") 
//  }


