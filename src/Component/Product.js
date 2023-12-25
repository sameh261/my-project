import React from "react";
import im1 from'../imgcard/img-tv.jpeg'


class Product extends React.Component{
    render(){
        const result=this.props.products_data

        const products_result=result.map((i) => {
            return(
<div class="card" style={{width: '15rem',margin:'auto'}}>
  <img src={im1} class="card-img-top" alt="#"/>
  <div class="card-body" style={{textAlign:'center'}}>
    <h5 id="title">{i.title}</h5>
    <p id="price">{i.body}</p>
    <a href="#" class="btn btn-info">Add To card</a>
  </div>
</div>
            )
        })
        return(
            <>
<div class="container">
<div class="row">
{products_result}
</div>
  
</div>


            </>
        )
    }
}
export default Product;