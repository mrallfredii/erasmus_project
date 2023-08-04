import { db } from "../connect.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => {

}

//register
export const register = (req, res) => {
    
    //check if exist the user in the DB
    const q = "SELECT * FROM users WHERE username = ?" //req.body.username

    //sent to DB and return data 
    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.status(500).json(err);
        //already an user
        if(data.lenght) return res.status(409).json("User already exists");
        //create new user
            //hash password
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);

            //add user to DB
            const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

            const values = [req.body.username, req.body.email, hashedPassword, req.body.name];

            db.query(q, [values], (err, data) => {
                if(err) return res.status(500).json(err);
                return res.status(200).json("User created succesfully");
            });
    });
};

export const logout = (req, res) => {
    
}