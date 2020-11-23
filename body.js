import React, { Component } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Container} from 'react-bootstrap';
import item1 from '../images/item1.PNG';
import item2 from '../images/item2.PNG';
import item3 from '../images/item3.PNG';
import Total from './Cartitems';



import '../App.css';
class Body extends React.Component{
 constructor (props){
   super(props)
   this.state={
    database:[
      { name: "Carman salas brown", price: 10.99, id: 1,pic: item1 },
      { name: "Carman salas pink", price: 24.05, id: 2,pic: item2},
      { name: "Carman salas burgundy", price: 18.01, id: 3,pic:item3 },
    ],
     count:0,
     total:0
   }
 }
 
  handleClick = e => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
    var total=this.state.total;
    //total=count*this.state.price;
    //this.setState({ total:total+});
  
  };
  render()
  { 
    return(
      <div>
        <Total count={this.state.count} total={this.state.total}/>
{
 this.state.database.map(item=>{
  return(
    <div>
      <Card className="d-inline-flex flex-wrap" style={{ width: '25rem',justifyContent:'inbetween' }} key={item.id}>
      <div style={{margin:'auto'}}>
<Card.Img variant="top" src={item.pic} width={20} height={350} />
</div>
<Card.Body>
<Card.Title className="text-center" style={{fontSize:25}}>{item.name}</Card.Title>
<Card.Text className="text-center" style={{fontSize:20}} price={item.price}>
{/* {this.state.price[0]} */}
Price: {item.price}$
</Card.Text>
<div  className=" w-50 m-auto">   
<button type="button" className=" btn btn-info  p-2 " style={{borderRadius:45,width:'70%'}} onClick={this.handleClick} >Add To Cart</button>
</div>
</Card.Body>
</Card>
    </div>


   
  )
})
}
      </div>
      
    ) 
   
  }
}
export default Body