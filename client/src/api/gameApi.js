import { request } from "../utils/requester"

import {useEffect, useState } from "react";
import useAuth from "../hooks/UseAuth";

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
  const {options} = useAuth()
  const create = (gameData) => {
    return request("POST",baseUrl,gameData,options);
  }
  return {
    create
  }
}
export const useGames = () =>{
  const [games,setGames] = useState([]);
  useEffect(() => {
    request("GET",baseUrl).then(setGames)
  },[])
  return {games}
}
export const useGame = (gameId) => {
  const [game,setGame] = useState([]);
  useEffect(() => {
    request("GET",`${baseUrl}/${gameId}`).then(setGame)
  },[gameId])
  return {game}
}
export const useEditGame = () => {
  const {options} = useAuth()
  const edit = (gameId,gameData) => {
    return request("PUT", `${baseUrl}/${gameId}`,{...gameData, _id : gameId},options)
  }
  return {edit}
}
export const useDeleteGame = () => {
  const {options} = useAuth();
  const deleteGame = (gameId) => {
    return request("DELETE",`${baseUrl}/${gameId}`,null,options)
  }
  return{deleteGame}
}