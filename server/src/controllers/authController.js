import authService from '#src/services/authService'


const exposeController = {

    login:async (req,res)=>{
        const {body} = req
        const user = await authService.authLogin(body)
        if(!user) return res.sendStatus(401)
        const testMatch = await authService.comparePassword({password:body.password,storedPassword:user.password})
        if(testMatch) return res.json({login:'success!'})
        return res.sendStatus(401)
    }


}

export default exposeController