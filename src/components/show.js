import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom"


function Show() {
  let [data,setData]= useState([])

  useEffect(()=>{
    async function getAllData(){
      try{
        let mydata=await axios.get("http://127.0.0.1:8000/")

        setData(mydata.data)
      }
      catch(error){
        console.log(error);
      }
    }
    getAllData()
  },[])


const renderCard=(card,index)=>{

  return(
    <Card style={{  }} key={index}>
    <Card.Img variant="top" src={"http://127.0.0.1:8000"+card.photo} className="image" />
    <Card.Body>
      {/* <Card.Title>Card Title</Card.Title> */}
      <Card.Text>
        {card.description}
      </Card.Text>
      
      <Link to="upload"><Button variant="success">More Details</Button></Link>
    </Card.Body>
  </Card>
  )

}



  return (
       <>
        <Container className="my-md-5 mt-3">
          <Row>
            <Col>
            <div className='wrapper'>{data.map(renderCard)}</div>
            </Col>
          </Row>
        </Container>
       </>

  );
}

export default Show;
