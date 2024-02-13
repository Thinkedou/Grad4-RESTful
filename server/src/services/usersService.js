import User from "#src/models/Users";

const exposeServices = {

    findAllUsers: async ()=>{
        try {
            const   allUsers = await User.find({})
            return  allUsers
        } catch (error) {
            throw new Error(error)
        }
    },
    createUser: async (rawData)=>{
        try {
            const   toSave  = new User(rawData)
            const   newUser = toSave.save()   
            return  newUser
        } catch (error) {
            throw new Error(error)
        }
    }

}



export default exposeServices