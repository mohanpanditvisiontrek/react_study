import {useState} from 'react';
import mycontext from "./usercontext";


const UserState=(props)=>
{


    const state={
        "name":"mohan",
        "address":"mohali"
    }

    const [states,setState]=useState(state);
    function update(){
        setState({
            "name":"mkp",
            "address":"chandigarh"
        },1000)
    }


    return(
      <mycontext.Provider value={{states,update}}>
          {props.children}
      </mycontext.Provider>
    )
}


export default UserState;