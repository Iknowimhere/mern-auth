import authInstance from '../services/auth.services.js'


export let register=async (req,res,next)=>{
    let newUser=await authInstance.registerUser(req);
    if(!newUser){
        return res.status(400).json({
            message:"User not created"
        })
    }
    res.status(201).json(newUser)
}

export let login=async (req,res,next)=>{
    let exisitngUser=await authInstance.loginUser(req);
    if(!exisitngUser){
        return res.status(400).json({
            message:"User not found please register"
        })
    }
    res.status(200).json(exisitngUser)
}