import {verifyJwt}    from '#src/utils/jwtoken'


const exposeController = {

    protect:async (req,res,next)=>{
        const accessToken  = req.headers['authorization'];

        if (!accessToken) {
            return res.status(401).send('Unauthorized');
        }
        if(accessToken.startsWith('Bearer ')) {
            // Remove Bearer from string
            const cleanAccess = accessToken.slice(7, accessToken.length);
            try {
                const verify = verifyJwt(cleanAccess)
            } catch (error) {
                console.log(error.message)
                return res.status(401).send('Unauthorized')
            }
            
            next()
        }
        
    }
}

export default exposeController