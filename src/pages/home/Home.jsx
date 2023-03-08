import { useState } from "react"
import Feed from "../../components/feed/Feed"
import LeftBar from "../../components/leftbar/LeftBar"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightbar/RightBar"
import Story from "../../components/story/Story"
import "./home.scss"

const Home = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className="home">

      <Navbar  open={open} setOpen={setOpen}/>
      <div className="homeContainer" >
        <LeftBar open={open} setOpen={setOpen} />
        <div className="homeContent">


<div className="storyContainer">
           
         <Story />
          <Story />
          <Story />
          <Story />
          <Story />        
</div>
<div className="newsfeedContainer">
            <Feed />
            <Feed />
            <Feed />

</div>

         
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default Home