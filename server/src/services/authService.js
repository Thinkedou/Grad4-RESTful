import User from "#src/models/Users";
import bcrypt from "bcrypt"

const exposeServices = {

    authLogin: async ({email,password})=>{
        try {
            const   findUser = await User.findOne({email})
            return  findUser
        } catch (error) {
            throw new Error(error)
        }
    }
   

}



export default exposeServices