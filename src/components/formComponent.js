import React from "react";
export default function FormComponent(){
    const [getName,setName]=React.useState("");
    const [getPrice,setPrice]=React.useState("");
    const [getStock,setStock]=React.useState("");
    const [getCity,setCity]=React.useState("");

    const SubmitClick=()=>{
        document.write(`Name=${getName}<br> Price=${getPrice} <br> stock=${getStock}<br>city=${getCity}`)
    }


    return(
        <>
        <form className="container" onSubmit={SubmitClick}>
            <h2>Register Product</h2>
            <div className="mt-2">
                <label className="form-label">Product Name</label>
                <div>
                    <input type="text" onChange={e=>setName(e.target.value)} className="form-control" name="Name" value={getName}/>
                </div>
            </div>
            <div className="mt-2">
                <label className="form-label">Price</label>
                <div>
                    <input type="text" onChange={e=>setPrice(e.target.value)} className="form-control" name="Price" value={getPrice}/>

                </div>

            </div>
            <div className="mt-2">
                <label className="form-label">City</label>
                <div>
                    <select className="form-select" onChange={e=>setCity(e.target.value)} name="City" value={getCity}>
                        <option >Delhi</option>
                        <option>bangalore</option>
                        <option>Hydrabad</option>
                        <option>Pune</option>
                    </select>
                </div>

            </div>
            <div className="mt-2">
                <label className="form-label">In stock</label>
                <div>
                   <input type="checkbox" name="stock" onChange={e=>setStock(e.target.value)} value={getStock} className="form-check-input"/> Yes
                </div>

            </div>
            <div className="mt-2">
                <div className="d-grid">
                <button className="btn btn-primary">register</button>
                </div>
            </div>



        </form>
        </>
    )

}