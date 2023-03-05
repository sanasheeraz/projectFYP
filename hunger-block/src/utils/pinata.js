import axios from 'axios';

const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const apiKey = 'your-pinata-api-key';
  const apiSecret = 'your-pinata-api-secret';

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