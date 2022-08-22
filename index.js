// Code your solutions in this file
names=["Guadalupe", "Ollie", "Aki"];
message="surprise" 
function writeCards(names,message) {
  const newArray=[]
   
  for (let i = 0; i < names.length; i++) {
    
  const msg=`Thank you, ${names[i]}, for the wonderful ${message} gift!`;
    newArray.push(msg);
}
 return newArray;
}
writeCards(names,message)

function countDown(i){
  while(i>=0){
    console.log(i);
    i--;
  }
}