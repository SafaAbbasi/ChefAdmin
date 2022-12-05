import axios from 'axios';

async function CallApi(apiOptions) {
  let apiResponse = {};

  const config = {
    method: apiOptions.method,
    url: apiOptions.endpoint,
    headers: apiOptions.headers,
    data: apiOptions?.data,
  };

  await axios(config)
    .then((result) => {
      apiResponse = result;
    })
    .catch((error) => {
      apiResponse = error;
    });

  return apiResponse;
}

const Utils = {
  CallApi,
};

export default Utils;
