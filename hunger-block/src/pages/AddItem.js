import React from 'react'
import { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { addMenuItem } from '../utils/interact'
import { USER_MENU_ITEM } from '../utils/constants'

const AddItem = () => {
  const [image, setImage] = useState('../assets/img/item.jpg');
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('');
 
  

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleRecipeNameChange = (event) => {
    setRecipeName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleAddClick = async () => {
    await addMenuItem(recipeName,description,price,unit);
  };
  
  return (
    <div>
      {/* navbar start */}
       <Navbar></Navbar>
      {/* navbar end */}
      {/* bredcrumb Area Start*/}
      <section className="breadcrumb-area" style={{"height":"300px"}}>
        <div className="banner-bg-img" />
        <div className="banner-shape-1"><img src="assets/img/banner/shape-1.png" alt="img" /></div>
        <div className="banner-shape-2"><img src="assets/img/banner/shape-2.png" alt="img" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner text-center" style={{"paddingTop":"100px"}}>
                <h1>Add Menu Item</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Item</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb Area End */}
      {/* contact start */}
      <div className="contact-area pd-top-20 pd-bottom-100">
          <div className="container">
            <div className="row">
            <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="default-form-wrap border-0 p-0 mt-4 mt-lg-0">
                <div className="row">
                    <div className="col-md-12">
                      <div className='col-md-6'>
                        <img src={image}/>
                      </div>
                      <div className='col-md-6'>
                      <input type="file" accept="image/*" onChange={handleImageChange} />
                      </div>
                    </div>   
                    </div>  
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="form-control" placeholder="Recipe Name" value={recipeName} onChange={handleRecipeNameChange}/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input-wrap">
                        <input type="text" className="form-control" placeholder="Price" value={price} onChange={handlePriceChange}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="form-control" placeholder="Unit (per plate / kg )" value={unit} onChange={handleUnitChange}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="form-control" placeholder="Your Description" value={description} onChange={handleDescriptionChange}/>
                      </div>
                    </div>
                  <button className="btn btn-base" onClick={handleAddClick}>Add Item</button>
                </div>
              </div>
              
            <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
        {/* contact end */}
       
        {/* footer area start */}
        <Footer></Footer>
        {/* back-to-top end */}
        <div className="back-to-top">
          <span className="back-top"><i className="fas fa-angle-double-up" /></span>
        </div>
        {/* all plugins here */}
        {/* main js  */}
      
    </div>
  )
}

export default AddItem