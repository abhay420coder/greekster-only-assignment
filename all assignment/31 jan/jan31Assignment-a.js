
// Assignment 1 (filtering):
// Use the object created in the class. Take a number from the user input and 
// return a list. (Do this in console.log) of all the students 
// who have scrored equal to or more than those marks.


var obj = [ { "name": "Name 1",  "marks": 15}, {  "name": "Name 2",  "marks": 17  },
              
              { 
                "name": "Name 3",
                "marks": 19
              },

              {  
                "name": "Name 4",
                "marks": 21
              },

              {
                "name": "Name 5",
                "marks": 0
              },
     
              {
  
                "name": "Name 6",
                "marks": 27
              }
  
            ]





const getuser = (mark)=>{
   
  let ans =[];

  for(var i=0;i<obj.length;i++){
    if(obj[i].marks>=mark){
      ans.push(obj[i]);
    }
  }

  return ans;

}




  var user_input =parseInt(prompt("how much wants your marks"));

  var res = getuser(user_input);
  console.log(res);

 
 


    
