import React from 'react';

 function Hello(){
     const sayHello = ()=>{
         console.log("hello");
     };
     return(
         <div>
             <h1> This is the header of the app </h1>
             <button onClick= {sayHello}>Say hello</button>
         </div>
     );
 }

 export default Hello; 