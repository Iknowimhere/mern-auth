import userInstance from "./user.services.js";


class AuthService{

    async register(req){
        let newUser=await userInstance.create(req)
        return newUser;
    }

    async login(req){
        let existingUser=await userInstance.findUserByEmail(req);
        return existingUser;
    }
}

export default new AuthService();