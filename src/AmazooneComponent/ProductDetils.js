import React from "react";
import { useParams,Link } from "react-router-dom";

const ProductDetails=()=>{

    let{id}=useParams();
    let products=[
        {Name:'SamsungTv',Price:45000,catagoriesid:1},
        {Name:'Earphone',Price:4000,catagoriesid:1},
        {Name:'Nike Shoe',Price:3300,catagoriesid:2},
        {Name:'WoodLand Shoe',Price:1780,catagoriesid:2},
        {Name:'Shirt',Price:699,catagoriesid:3},
        {Name:'Speaker',Price:3000,catagoriesid:4}
    ]
    let result=products.filter(category=>category.catagoriesid==id);
    return(
        <>
        <div>
            <h2>Product List</h2>
            <table className="table table-hover">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      result.map(category=>
                        <tr>
                            <td>{category.Name}</td>
                            <td>{category.Price}</td>
                        </tr>
                        )
                  }
              </tbody>


            </table>
            {/* CatagoriesId:{id} */}
            <br/>
            <Link to={"/categories"}>back to Catagories</Link>
        </div>
        </>
    )
}
export default ProductDetails