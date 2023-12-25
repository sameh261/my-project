import React from "react";
import im2 from '../imgcard/img-tv.jpeg'
import im3 from '../imgcard/img-mobile.jpeg'
import im4 from '../imgcard/img-tv.jpeg'
import Product from "../Component/Product";
import axios from "axios";


class Home extends React.Component{
    state={
        products:[]
    }
    constructor(){
        super()
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            this.setState({
                products:response.data
            })

        })
    }
    render(){
        return(
        <>
        <Product products_data={this.state.products}/>
        </>
        )
    }
}
export default Home;






{/* <div class="container">
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src={im2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div> */}