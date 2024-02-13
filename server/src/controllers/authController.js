import authService from '#src/services/authService'


const exposeController = {

    login:async (req,res)=>{
        const {body} = req
        const user = await authService.authLogin(body)
        return res.json(user)
    }


}

export default exposeController