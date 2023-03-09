import axios from 'axios';
const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const apiKey = '9533338c7123d2c593ff';
  const apiSecret = 'b7de55fd0f28fa4aef8bf022fc06d349f351660172b5b191cd31ad7b3a5d84ac';
  //const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTkxMGNmNC01ODE3LTRiYzAtYmYwOC0zMDkyNWIyYWY0ZDEiLCJlbWFpbCI6ImJhdGNoMTcxMGMxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5NTMzMzM4YzcxMjNkMmM1OTNmZiIsInNjb3BlZEtleVNlY3JldCI6ImI3ZGU1NWZkMGYyOGZhNGFlZjhiZjAyMmZjMDZkMzQ5ZjM1MTY2MDE3MmI1YjE5MWNkMzFhZDdiM2E1ZDg0YWMiLCJpYXQiOjE2NzgyOTQ4NTB9.1-LQHiuxr94YuJNBOYQmpnKuds5cZnI_OgQN30YMphQ`

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
console.log(response);
  // return the IPFS hash of the pinned file
  return response;
} catch (error) {
  console.error(error);
}

};
export default pinFileToIPFS;