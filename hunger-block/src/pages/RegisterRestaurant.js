import React from 'react'
import { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { addRestaurant } from '../utils/interact'
import axios from 'axios';

const RegisterRestaurant = () => {
    
  const [image, setImage] = useState('../assets/img/restLogo.png');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const pinFileToIPFS = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const apiKey = '9533338c7123d2c593ff';
    const apiSecret = 'b7de55fd0f28fa4aef8bf022fc06d349f351660172b5b191cd31ad7b3a5d84ac';
    const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTkxMGNmNC01ODE3LTRiYzAtYmYwOC0zMDkyNWIyYWY0ZDEiLCJlbWFpbCI6ImJhdGNoMTcxMGMxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5NTMzMzM4YzcxMjNkMmM1OTNmZiIsInNjb3BlZEtleVNlY3JldCI6ImI3ZGU1NWZkMGYyOGZhNGFlZjhiZjAyMmZjMDZkMzQ5ZjM1MTY2MDE3MmI1YjE5MWNkMzFhZDdiM2E1ZDg0YWMiLCJpYXQiOjE2NzgyOTQ4NTB9.1-LQHiuxr94YuJNBOYQmpnKuds5cZnI_OgQN30YMphQ`
  
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
    return response;
  } catch (error) {
    console.error(error);
  }
  
  };
  const handleSignUpClick = async () => {
    //https://gateway.pinata.cloud/ipfs/Qmf6ukCP4TLBezPcPC8JkHBbhYwxjd4tHWvA2eFCqa5RhJ
    console.log("Image Uploaded "+pinFileToIPFS());
    await addRestaurant(name,location,description,email,password);
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
                <h1>SIGNUP PAGE</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="https://www.themefie.com/html/foodka/home.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Register</li>
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
                        <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={handleNameChange}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="form-control" placeholder="Your Email" value={email} onChange={handleEmailChange}/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input-wrap">
                        <input type="password" className="form-control" placeholder="Your Password" value={password} onChange={handlePasswordChange}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="form-control" placeholder="Your Location" value={location} onChange={handleLocationChange}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="form-control" placeholder="Your Description" value={description} onChange={handleDescriptionChange}/>
                      </div>
                    </div>
                  <button className="btn btn-base" onClick={handleSignUpClick}>REGISTER</button>
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

export default RegisterRestaurant
