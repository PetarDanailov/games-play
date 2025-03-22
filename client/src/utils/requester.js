export const request = async (method, url, data,options = {}) => {
  
  if(method!== "GET"){
    options = {
      method,
  };
  }
  if(data) {
    options = {
      ...options,
      headers: {...options.headers,"Content-Type": "application/json"},
      body: JSON.stringify(data),
    }
  }
  
  const response = await fetch(url,options);
  const result =  await response.json();
  return result;
}