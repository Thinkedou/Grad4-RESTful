import User  from "#src/models/Users";
import bcryptjs from "bcryptjs"

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
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(password, salt);
        
        const newUserData = {
            ...rawData,
            password:hash
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