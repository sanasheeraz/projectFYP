import axios from 'axios';

const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const apiKey = '172d2642f312165a10d3';
  const apiSecret = 'c546d9808994104ab932152aa9f25abc5ff55ac43a48a1d28b82ad4595a27368';

  // create a FormData object to send the file
  const data = new FormData();
  data.append('file', file);

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

    // return the IPFS hash of the pinned file
    return response.data.IpfsHash;
  } catch (error) {
    console.error(error);
  }
};