import creationsService from '#src/services/creationsService'

import {redisClient,get} from '#src/services/redisClient';

const exposeController = {

    allCreations:async (req,res)=>{
        const {query} = req
        const allCreations = await creationsService.findAllCreations(query)
        return res.json(allCreations)

        console.log(cacheResults)
        if (cacheResults) {
            res.set('x-cache','HIT')
            return res.json(JSON.parse(cacheResults))
        }else{
            res.set('x-cache','MISS')
            console.log('CACHE MISS')
           
        }
        


        // const cacheKey = `user_profile_${userId}`;
        // client.del(cacheKey);
        
    },
    oneCreation:async (req,res)=>{
        const {params:{id}} = req
        const keyCache = "creations_"+id
        const onCache = await redisClient.get(keyCache)
        console.log({keyCache})
        if(onCache){
            res.set('x-cache','HIT')
            res.json(JSON.parse(onCache))
        }else{
            
            const oneCrea = await creationsService.findOneCreation({id})
            if(!oneCrea) return res.sendStatus(404)
        
            await redisClient.set("creations_"+id,JSON.stringify(oneCrea),{EX:20})
            res.set('x-cache','MISS')
            res.json(oneCrea)
        }

        
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
                redisClient.del("creations_"+id)
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