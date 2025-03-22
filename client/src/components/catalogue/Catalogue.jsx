import { useEffect, useState } from "react";
import { Link } from "react-router";
import gameService from "../../services/gameService";
import GameCatalogItem from "./gameCatalogItem/GameCatalogItem";
import { useGames } from "../../api/gameApi";

export default function Catalogue(){
  const {games} = useGames()
  console.log(games)
  return(
    <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {games.map(game => <GameCatalogItem key={game._id} {...game}/>)}
            {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
            
        </section>
  )
}