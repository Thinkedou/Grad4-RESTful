import creationsService from '#src/services/creationsService'


const exposeController = {

    allCreations:async (req,res)=>{
        const {query} = req
        const allCreations = await creationsService.findAllCreations(query)
        return res.json(allCreations)
    },
    oneCreation:async (req,res)=>{
        const {params:{id}} = req
        const oneCrea = await creationsService.findOneCreation({id})
        if(!oneCrea) return res.sendStatus(404)
        return res.json(oneCrea)
    },
    createCreation:async (req,res)=>{
        const {body}  = req
        try {
                const newCrea = await creationsService.createCreations(body)     
                return res.status(201).json(newCrea)
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
        
    },
    patchCreation:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toPatch = await creationsService.patchCreation({id,body})     
                return res.json(toPatch)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController