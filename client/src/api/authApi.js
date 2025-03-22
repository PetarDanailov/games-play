import { useContext, useEffect, useRef } from "react";
import { request } from "../utils/requester"
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users'
export const useLogin = () =>{
  
  const abortRef = useRef()
  const login = async (email,password) => {
    const result = await request("POST",`${baseUrl}/login`,{email,password},{signal : abortRef.current.signal});
    return result 
  }
  useEffect(() => {
    const abortController = new AbortController();
    abortRef.current = abortController
    return () => abortController.abort()
  }, [])
  return login
  
}
export const useRegister = () =>{
  const register =async (email,password) => {
    const result = await request("POST", `${baseUrl}/register`,{email,password});
    return result
  }
  return register 
}
export const useLogout = () => {
  const {accessToken, userLogoutHandler} = useContext(UserContext)
  useEffect(() => {
    if(!accessToken) {
      return;
    }
    request("GET",`${baseUrl}/logout`,null,{headers: {"X-Authorization": accessToken}}).then(() => {
      userLogoutHandler();
    })
  },[accessToken,userLogoutHandler])
  return {
    isLoggedOut: !!accessToken
  }
}