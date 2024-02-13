import usersService from '#src/services/usersService'


const exposeController = {

    allUsers:async (req,res)=>{
        const allUsers = await usersService.findAllUsers()
        return res.json(allUsers)
    },
    createUser:async (req,res)=>{
        const {body} = req 
        return res.json(body)
    }


}

export default exposeController