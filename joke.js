/* <div id="jk">joke loading......</div>
// <button id="jokebtn" class="btn">next joke</button> */

//ise phle XMLHttpRequest ka use kiya tha abb fetch ka usekarenge
//fetch ek promise return Krta h
//promise se behtar h async await h

//GET https://icanhazdadjoke.com
 // by using asyn await
//  
 //document.getElementById("jokebtn").addEventListener("click",function createjokes(){
//   let setHeader= { headers: {
//        Accept: "application/json"
//     }
//}
     //fetch('https://icanhazdadjoke.com', setHeader)
//     .then((response)=> response.json()) 
//      .then((data)=> 
//          document.getElementById("jk").innerHTML =data.joke
// ).catch((error)=> {
//        console.log(error);
// }
//   ) })




  //asynawait
   
 document.getElementById("jokebtn").addEventListener("click", async function createjokes(){
  try{
let setHeader= { headers: {
         Accept : "application/json"
      }
  }
       let response = await fetch('https://icanhazdadjoke.com', setHeader);
        let data    = await response.json();
        document.getElementById("jk").innerHTML =data.joke;            
  }catch(err){
    console.log(`error is ${err}`);
  }

  })



  //asyn await kaam karr ra h uppr wala nahi kaam karr raha 