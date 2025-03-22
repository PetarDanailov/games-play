import { request } from "../utils/requester"

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

// 

// const create = async (gameData) => {
//   return request("POST",baseUrl,gameData);
// }
// const getAll =  async () => {
//   const result = await request("GET", baseUrl);
//   const games = Object.values(result);
//   return games;
// }
// const getOne = async (gameId) =>{
//   return request("GET",`${baseUrl}/${gameId}`);
  
// }
// const deleteGame = async (gameId) => {
//   return request("DELETE",`${baseUrl}/${gameId}`);
// }
// const editGame = async (gameId,gameData) => {
//   return request("PUT", `${baseUrl}/${gameId}`,{...gameData, _id : gameId})
// }
// export default {
//   create,
//   getAll,
//   getOne,
//   deleteGame,
//   editGame
// }
const baseUrl = 'http://localhost:3030/data/games'
export const useCreateGame = () => {
  const {accessToken} = useContext(UserContext)
  const create = (gameData) => {
    return request("POST",baseUrl,gameData,{headers: {"X-Authorization": accessToken}});
  }
  return {
    create
  }
}