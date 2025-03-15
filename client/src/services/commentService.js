import { request } from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
  create(email,gameId,comment){
    return request("POST",baseUrl,{email,gameId,comment})
  },
  async getAll(gameId){
    const comments = await request("GET",baseUrl);
    // TODO: Filter when migrate to collections
    const gameComments = Object.values(comments).filter(comment => comment.gameId == gameId);
    console.log(gameComments)
    return gameComments;
  }
}