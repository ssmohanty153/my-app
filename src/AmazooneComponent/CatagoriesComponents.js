import React from "react";
import { Link } from "react-router-dom";

const CatagoriesComponents=()=>{
    let categories=[
        {CategoriesId:1,Categoriesname:'Eletronics'},
        {CategoriesId:2,Categoriesname:'Fashion'},
        {CategoriesId:3,Categoriesname:'Footware'},
        {CategoriesId:4,Categoriesname:'Eletronics'}
    ];
    return(
        <>
        <div>
            <h2>CategoriesDetails</h2>
            <ul>
                {
                    categories.map(category=>
                        <li key={category.CategoriesId}>
                            <Link to={'/products/'+category.CategoriesId}>{category.Categoriesname}</Link>

                        </li>
                        )
                }
            </ul>
        </div>
        </>
    )
}
export default CatagoriesComponents