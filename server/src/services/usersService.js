import User from "#src/models/Users";
import bcrypt from "bcrypt"

const exposeServices = {

    findAllUsers: async ()=>{
        try {
            const   allUsers = await User.find()
            return  allUsers
        } catch (error) {
            throw new Error(error)
        }
    },
    createUser: async (rawData)=>{
        const {password} = rawData
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        const newUserData = {
            ...rawData,
            password:hash,
            salt
        }

        try {
            const   toSave  = new User(newUserData)
            const   newUser = toSave.save()   
            return  newUser
        } catch (error) {
            throw new Error(error)
        }
    }

}



export default exposeServices