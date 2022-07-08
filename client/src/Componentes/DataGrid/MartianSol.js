import React,{useState, useEffect} from "react";
//import { connect } from "react-redux";
import {useForm} from "react-hook-form";

import "./MartianSol.css";

function MartianSol(props) {
  const [myChildData, setMyChildData] = useState(null);
  let [inputValue, setInputValue] = useState("")
  //const {register, handleSubmit} = useForm();

useEffect(() => {
  setMyChildData( props.dato);
  
}
);



useEffect(() => {
  
console.log("dato de entrada " + inputValue )
  
});



 //const prueba = () => setMyChildData( props.dato);
 
 
  console.log("estamos en el Martian Sol este es dato " + JSON.stringify(props.dato))

  console.log("estamos en el Martian Sol este es el mychild " + JSON.stringify(myChildData))

  return (
    <div className="martianSun">
      <div className="martianSun-type">
        Martian Sol <input type="search" className="input" placeholder="" name="martianSun" 
           
        />
      </div>
      <div>
     </div>
  
    </div>
  );
}


export default MartianSol;
//name="password" {...register('password')}
//props.updateParentData((prevState) => ({ ...prevState, hello: "bye" }))