import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
      //select like from post
      const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?";
      
      db.query(q, [req.query.followedUserId], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data.map(relationship => relationship.followerUserId));
      });
}

//add Relationship
export const addRelationship = (req, res) => {

    //check cookies
    const token = req.cookies.accesToken;
    if (!token) return res.status(401).json("Not logged in");
    //timeout token
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");
  
        //insert the post to sql
        const q = "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?)";
  
        const values = [
            userInfo.id,
            req.body.userId
          ];      
        
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("following");
        });
    });
};

//delete Relationship
export const deleteRelationship = (req, res) => {

    //check cookies
    const token = req.cookies.accesToken;
    if (!token) return res.status(401).json("Not logged in");
    //timeout token
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");
  
        //insert the post to sql
        const q = "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";
        
        db.query(q, [userInfo.id, req.query.userId], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("unfollow");
        });
    });
};