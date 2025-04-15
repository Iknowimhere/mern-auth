import authInstance from '../services/auth.services.js'


export let register=async (req,res,next)=>{
    let newUser=await authInstance.registerUser(req);
    if(!newUser){
        return res.status(400).json({
            message:"User not created"
        })
    }
  
    res.status(201).json({
        username:newUser.username,
        email:newUser.email,
        role:newUser.role
    })
}

export let login=async (req,res,next)=>{
    let exisitingUser=await authInstance.loginUser(req);
    if(!exisitingUser){
        return res.status(400).json({
            message:"User not found please register"
        })
    }
    res.status(200).json(exisitingUser)
}