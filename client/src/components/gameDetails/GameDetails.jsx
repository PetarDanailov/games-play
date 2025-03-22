import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import gameService from "../../services/gameService";
import CommentsCreate from "../commentsCreate/CommentsCreate";
import CommentsShow from "../commentsShow/CommentShow";
import commentService from "../../services/commentService";
import { UserContext } from "../../contexts/UserContext";

export default function GameDetails(){
    const navigate = useNavigate();
    const [game,setGame] = useState({});
    const {email} = useContext(UserContext)
    const [comments,setComments] = useState([]);
    const {gameId} = useParams();
    console.log(comments)
    useEffect(() => {( 
        async() =>{
            const result = await gameService.getOne(gameId);
            setGame(result)
        })();
        commentService.getAll(gameId).then(setComments)
    },[gameId])
    const gameDeleteClickHandler = async () =>{
        const hasConfirm = confirm("Are you sure you want to delete this game?");
        if(!hasConfirm){
            return;
        }
        await gameService.deleteGame(gameId)
        navigate('/catalogue')
    }
  return(
    <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">

        <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
        </div>

        <p className="text">
            {game.summary}
        </p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
       <CommentsShow comments={comments}/>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
            <Link to={`/catalogue/${gameId}/edit`} className="button">Edit</Link>
            <button onClick={gameDeleteClickHandler} className="button">Delete</button>
        </div>
    </div>

    {/* <!-- Bonus --> */}
    {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
    <CommentsCreate email={email} gameId={gameId}/>

</section>
  )
}