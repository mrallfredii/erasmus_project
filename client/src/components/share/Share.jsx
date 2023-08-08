import "./share.scss"
import { AuthContext } from "../../context/authContext";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => {

    //add post file and description
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");

  const {currentUser} = useContext(AuthContext);

  //client for refresh posts
  const queryClient = useQueryClient();

  //mutation file and desc
  const mutation = useMutation((newPost) => {
    return makeRequest.post("/posts", newPost);
  }, 
  {
    onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  )

  const handleClick = e => {
    e.preventDefault();
    mutation.mutate({desc});
  }

  return (
    <div className="share">
        <div className="container">
            <div className="top">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder={`What's on your mind ${currentUser.name} ...`} onChange={e=>setDesc(e.target.value)}/>
            </div>
            <hr/>
            <div className="bottom">
                <div className="left">
                    <input type="file" id="file" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/> {/* 1 image */}
                    <label htmlFor="file">
                        <div className="item">
                            <img src={Image} alt="" />
                            <span>
                                Add Image
                            </span>
                        </div>
                    </label>
                    <div className="item">
                        <img src={Map} alt="" />
                        <span>
                            Add Place
                        </span>
                    </div>
                    <div className="item">
                        <img src={Friend} alt="" />
                        <span>
                            Tag Friends
                        </span>
                    </div>
                </div>
                <div className="right">
                    <button onClick={handleClick}>Post</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Share;