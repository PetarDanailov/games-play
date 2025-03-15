import { request } from "../utils/requester"

const baseUrl = 'http://localhost:3030/jsonstore/games'

const create = async (gameData) => {
  return request("POST",baseUrl,gameData);
}
const getAll =  async () => {
  const result = await request("GET", baseUrl);
  const games = Object.values(result);
  return games;
}
export default {
  create,
  getAll
}