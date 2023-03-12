import React from 'react'
import { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { addMenuItem } from '../utils/interact'
import { USER_MENU_ITEM } from '../utils/constants'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddItem = () => {
  const navigate=useNavigate();
  const [image, setImage] = useState('../assets/img/item.jpg');
  const [imageDisplay, setDisplay] = useState('../assets/img/restLogo.png');
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('');
 
  const pinFileToIPFS = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const apiKey = '9533338c7123d2c593ff';
    const apiSecret = 'b7de55fd0f28fa4aef8bf022fc06d349f351660172b5b191cd31ad7b3a5d84ac';
    //const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTkxMGNmNC01ODE3LTRiYzAtYmYwOC0zMDkyNWIyYWY0ZDEiLCJlbWFpbCI6ImJhdGNoMTcxMGMxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5NTMzMzM4YzcxMjNkMmM1OTNmZiIsInNjb3BlZEtleVNlY3JldCI6ImI3ZGU1NWZkMGYyOGZhNGFlZjhiZjAyMmZjMDZkMzQ5ZjM1MTY2MDE3MmI1YjE5MWNkMzFhZDdiM2E1ZDg0YWMiLCJpYXQiOjE2NzgyOTQ4NTB9.1-LQHiuxr94YuJNBOYQmpnKuds5cZnI_OgQN30YMphQ`
  
  // create a FormData object to send the file
  const data = new FormData();
  data.append('file', image);
  
  try {
    // send the POST request to Pinata
    const response = await axios.post(url, data, {
      maxContentLength: 'Infinity',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: apiKey,
        pinata_secret_api_key: apiSecret,
      },
    });
    console.log(response);
    // return the IPFS hash of the pinned file
    await addMenuItem(recipeName,description,price,unit,response.data.IpfsHash);
    return response.data.IPFS;
  } catch (error) {
    console.error(error);
  }
  
  };

  const handleImageChange = (e) => {
    setDisplay(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
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
    var img = await pinFileToIPFS();
     navigate("/");
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