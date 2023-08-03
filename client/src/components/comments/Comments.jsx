import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {

  const {currentUser} = useContext(AuthContext)

  //users
  const comments = [
    {
      id: 1,
      name: "alfred manuel",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "alfreeeeeeeeeeed",
      img: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "anton montserrat",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "antooooooooon",
      img: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "sergi alier",
      userId: 3,
      profilePic: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "betaaaaaaaaaa",
      img: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment"/>
        <button>
          Send
        </button>
      </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.img} alt="" />
                <div className="info">
                    <span>
                        {comment.name}
                    </span>
                    <p>
                        {comment.desc}
                    </p>
                </div>
                <span className="date">
                    1 hour ago
                </span>
            </div>
        ))
    }</div>
  )
}

export default Comments;