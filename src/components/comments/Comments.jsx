import { useState } from "react"
import Comment from "../comment/Comment"
import "./comments.scss"


const Comments = ( ) => {
  return (
    <div className="comments" >
          <div className="commentsInfo" >
              <img src="https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <input type="text" name="" id="" placeholder="write a comment ." />
        </div>

          {/* {open && */}
<div className="commentContainer">

         <Comment />          
</div>
{/* } */}

        
    </div>
  )
}

export default Comments