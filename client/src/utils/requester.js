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
  try{

    const response = await fetch(url,options);
    const responseContentType = response.headers.get("Content-Type")
    if(!responseContentType){
      return;
    }
    const result =  await response.json();
    return result;
  }
  catch(err){

  }
}