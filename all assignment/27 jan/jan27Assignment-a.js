
// ASSIGNMENT :-

// Take the input from the user . It has to be dynamic . 

// I can enter 3 numbers as well as 30 numbers .  

// It should give me the maximum of all of them .

// We will be using array as the underlying data structure .





/*
algorithm to push element in array_list

step = 1 :-   create an array as array_list
step = 2 :-   take an input as num ......for how much you want enter the number
step = 3 :-   convert input( means num ) into integer  ...... because input is always in string ... we have to convert string into integer
step = 4 :- for ()
step = 5 :-
step = 6 :-

*/




 var array_list = []


 var num = prompt (" enter the number how much you Want ")
 num = parseInt(num)



 for ( let i=0 ; i<num ; i++ )
 {
     var new_element = prompt("enter new element")
     new_element = parseInt(new_element)
     array_list.push(new_element)
 }



 console.log(array_list)

 var lambai = array_list.length
 console.log(lambai)
 
 var max=array_list[0]

 for( let i=1 ; i<lambai ; i++)
 {
     if( array_list[i] > max )
     {
         max = array_list[i]
     }
 }

 alert(max)














// var count=prompt("enter total number")
// var arr = []

//  for( let i=1 ; i<=count ; i++)
//  {
//      var elem = prompt("enter your element")
//      arr.push(elem)

//  }

//  var max=arr[0]

//  for( let i=1 ; i<count ; i++)
//  {
//      if( arr[i] > max )
//      {
//          max = arr[i]
//      }
//  }

//  alert(max)
