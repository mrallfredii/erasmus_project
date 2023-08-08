import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

//get posts
export const getPosts = (req, res) => {

    //check cookies
    const token = req.cookies.accesToken;
    if (!token) return res.status(401).json("Not logged in");
    //timeout token
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

        //get the post of owner user and friends
        const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
        LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ?
        ORDER BY p.createdAt DESC`;
        
        db.query(q, [userInfo.id, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });
};

//add post
export const addPost = (req, res) => {

    //check cookies
    const token = req.cookies.accesToken;
    if (!token) return res.status(401).json("Not logged in");
    //timeout token
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

        //insert the post to sql
        const q = "INSERT INTO posts (`desc`, `img`, `createdAt`, `userId`) VALUES (?)";

        const values = [
            req.body.desc,
            req.body.img,
            //mysql date format with moment
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id
        ];
        
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("post added");
        });
    });
};