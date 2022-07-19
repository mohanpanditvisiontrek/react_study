import React, { useState , useContext, useEffect} from 'react'
import Axios from "axios";
import mycontext from "../context/usercontext";



function Upload(){

const cont=useContext(mycontext)

useEffect(()=>{
    cont.update();
    // eslint-disable-next-line
},[])

const [image,setPhoto]=useState('')


const url="http://127.0.0.1:8000/"
const [data,setData]=useState({
    description:"",

})

function submit(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo',image)
    formData.append('description',data.description)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    Axios.post(url,formData,config).then(response=>{
        console.log(response);
    })                        
    .catch(error=>{
        console.log(error);
    })                                                                             
}


    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }

  const handlechange=(e)=>{
    console.log(e.target.files)
    setPhoto(e.target.files[0])
  }
  
return(
    <>
    <div className="container">
    <div className="row">
        <div className="col">
            <p>Hello {cont.states.name} your address {cont.states.address} </p>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={handlechange}  type="file" placeholder="select image" className='form-control' /> <br /> <br />
                <input onChange={(e)=>handle(e)} value={data.description} id="description" type="text" className='form-control' placeholder="Write your description" /> <br /> <br />
            <button className="btn btn-primary">Post</button>
            </form>
        </div>
        </div>
    </div>
    </>

)
}

// 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

export default Upload;