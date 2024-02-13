import usersService from '#src/services/usersService'


const exposeController = {

    allUserController:async (req,res)=>{
        const allUsers = await usersService.findAllUsers()
        return res.json(allUsers)
    }

}

export default exposeController