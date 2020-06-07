import userModel from "../models/user_model";

class User {
    static async getUser (req, res)  {
    //res.send("We are on posts")
        try{
            const users = await  userModel.find();
            res.json(users);
        }catch(err){
            res.json({message:err});
        }
    }; 
    static async postUser(req, res)  {
        const user = new userModel({
            name: req.body.name,
            age: req.body.age
        });
        try{
            const savedPosts = await  user.save();
            res.json(savedPosts);
        }catch(err){
            res.json({message:err});
        }
    };
}
export default  User;