import "./rightbar.scss" ;

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <div className="item">
          <span>Suggestions for you </span>
          <div className="user">
            <div className="userInfo">
            <img src="/imgs/o.png" alt="" />
            <span>kawsar  </span>
            </div>
            <div className="buttons">
              <button>Follow </button>
              <button>Dismiss </button>
            </div>
          </div>
          {/*  */}

          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <span> firoz </span>
            </div>
            <div className="buttons">
              <button>Follow </button>
              <button>Dismiss </button>
            </div>
          </div>
          {/*  */}
         
        </div>

{/* another item  */}
        <div className="item">
          <span>Latest Activities </span>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <p>
              <span>firoz </span> changed their cover picture 
              </p>
            </div>
            <span>1 min ago </span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <p>
                <span>firoz </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div> <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <p>
              <span>firoz </span> changed their cover picture 
              </p>
            </div>
            <span>1 min ago </span>
          </div>
           <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <p>
              <span>firoz </span> changed their cover picture 
              </p>
            </div>
            <span>1 min ago </span>
          </div>
        </div>
        {/* another item */}
        <div className="item">
          <span>Online Friends </span>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
                <span>firoz </span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <span>firoz </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <span>firoz </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <span>firoz </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <span>firoz </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/imgs/o.png" alt="" />
              <span>firoz </span>
            </div>
          </div>

        </div>

      </div>
      
      </div>
  )
}

export default RightBar