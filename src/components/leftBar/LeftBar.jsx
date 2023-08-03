import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gallery from "../../assets/8.png";
import Messages from "../../assets/10.png";


const LeftBar = () => {
  return (
    <div className="leftBar">
        <div className="container">
          <div className="menu">
            <div className="user">
              <img src="https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>
                Alfred Manuel
              </span>
            </div>
            <div className="item">
              <img src={Friends} alt="" />
              <span>
                Friends
              </span>
            </div>
            <div className="item">
              <img src={Groups} alt="" />
              <span>
                Groups
              </span>
            </div>
            <div className="item">
              <img src={Messages} alt="" />
              <span>
                Messages
              </span>
            </div>
            <div className="item">
              <img src={Events} alt="" />
              <span>
                Events
              </span>
            </div>
          </div>
          <hr/>
          <div className="menu">
            <span>
              About you
            </span>
            <div className="item">
              <img src={Memories} alt="" />
              <span>
                Memories
              </span>
            </div>
            <div className="item">
              <img src={Gallery} alt="" />
              <span>
                Gallery
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LeftBar;