// user will give a string ,r eturn the count of vowels
// aayush == output = 3
// aAyush == output = 3
var nam = prompt("enter name")
var sam = nam.split('');
var count = 0
for (let m=0 ; m<sam.length ; m++)
{
    if (sam[m]=="a" || sam[m]=="A" || sam[m]=="e" || sam[m]=="E" || sam[m]=="i" || sam[m]=="I" || sam[m]=="o" || sam[m]=="O" || sam[m]=="u" || sam[m]=="U")
    {
        count=count+1
    }
}
console.log(count)

