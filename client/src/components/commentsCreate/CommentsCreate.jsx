import commentService from "../../services/commentService";

export default function CommentsCreate({email,gameId}){
  console.log(email)
  const commentAction = async (formData) =>{
    const comment = formData.get("comment");
   const result =  await commentService.create(email, gameId, comment);
   console.log(result)
  }
  return(
    <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" action={commentAction}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment"/>
        </form>
    </article>
  )
}