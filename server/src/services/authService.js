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
    },
    comparePassword : async ({password,storedPassword})=>{
        const result = await bcrypt.compare(password, storedPassword);
        return result 
    }

   

}



export default exposeServices