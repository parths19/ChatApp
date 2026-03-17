import { generateToken } from "../lib/utils";
import User from "../models/User";
import bcrpyt from "bcryptjs";

// SignUp for new User
export const signup = async(req, res) => {
    const {fullName,email,password,bio} = req.body;
    
    try {
        if (!fullName || !email || !password || !bio) {
            return res.json({success: false, message: "missing details"});
        }
        const user = await User.findOne({email});

        if (user) {
            return res.json({success: false, message: "User Already Exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrpyt.hash(password, salt);

        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        });

        const token = generateToken(newUser._id);

        res.json({success: true, userData: newUser, token, message: "Account created succesfully"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Login for existing user 
export const login = async(req, res) => {
    try {
        const {email,password} = req.body;
        const userData = User.findOne({email});

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            res.json({success: false, message: "Invalid Credentials"}); 
        }

        const token = generateToken(userData._id);
        res.json({success: true, userData: userData, token, message: "Login Successfully"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Controller to check if user is authenticated
export const checkAuth = async(req, res) => {
    res.json({success: true, user: req.user})
}


