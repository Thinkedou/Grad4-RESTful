import creationsService from '#src/services/creationsService'


const exposeController = {

    allCreations:async (req,res)=>{
        const allCreations = await creationsService.findAllCreations()
        return res.json(allCreations)
    },
    oneCreation:async (req,res)=>{
        const {id} = req.params
        const oneCrea = await creationsService.findOneCreation({id})
        if(!oneCrea) return res.sendStatus(404)
        return res.json(oneCrea)
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
    },
    updateCreation:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
                const toUpdate = await creationsService.updateCreation({id,body})     
                return res.json(toUpdate)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController