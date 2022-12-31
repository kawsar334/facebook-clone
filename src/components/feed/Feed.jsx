import { useState } from "react"
import Comments from "../comments/Comments"
import "./feed.scss"

const Feed = () => {
  const [open, setOpen] = useState(false)
  const handleOpen= ()=>{
    alert("skjdflk")
    // setOpen(!open)
  }

  return (
    <div className="feed">
      <div className="feedTop">
        <div className="feedInfoContainer">
          <img src="/imgs/o.png" alt="Loading.." />
          <div className="feedInfo">
            <span className="name" onClick={()=>alert("sdjf")}>Kawsar </span>
            <span>1 day ago </span>
          </div>
        </div>
           <span>... </span>
      </div>
      <div className="feedMiddle" >
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto voluptatem necessitatibus quae in fuga, cupiditate reiciendis quod odit nesciunt, laboriosam nobis</p> 
        <img src="https://images.pexels.com/photos/1407325/pexels-photo-1407325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..." />
      </div>
      <div className="feedBottom">
        <div className="newsfeedButtons">
          <button ><span>Like </span><i class="fa-regular fa-thumbs-up"></i></button>
          <button style={{ color: "red" }}  >Comment <i class="fa-regular fa-comment" ></i></button>
          <button ><span>Share </span><i class="fa-solid fa-share"></i></button>

        </div>

        
        <div className="commentsContainer">

           <Comments  /> 
        </div> 
      </div>

    </div>
  )
}

export default Feed