import creationsService from '#src/services/creationsService'


const exposeController = {

    allCreations:async (req,res)=>{
        const allCreations = await creationsService.findAllCreations()
        return res.json(allCreations)
    },
    createCreation:async (req,res)=>{
        const {body}  = req
        try {
                const newCrea = await creationsService.createCreations(body)     
                return res.json(newCrea)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController