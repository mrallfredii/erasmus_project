import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  //select like from post
  const q = "SELECT userId FROM likes WHERE postId = ?";

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.userId));
  });
};

//add like
export const addLike = (req, res) => {
  //check cookies
  const token = req.cookies.accesToken;
  if (!token) return res.status(401).json("Not logged in");
  //timeout token
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    //insert the post to sql
    const q = "INSERT INTO likes (`userId`, `postId`) VALUES (?)";

    const values = [userInfo.id, req.body.postId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("liked post");
    });
  });
};

//delete like
export const deleteLike = (req, res) => {
  //check cookies
  const token = req.cookies.accesToken;
  if (!token) return res.status(401).json("Not logged in");
  //timeout token
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    //insert the post to sql
    const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

    db.query(q, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("disliked");
    });
  });
};
