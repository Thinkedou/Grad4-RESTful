import etag from "etag"
import fresh from 'fresh'
import {isFresh} from '#src/utils/eTagChecker'
import creationsService from '#src/services/creationsService'



const exposeController = {

    allCreations:async (req,res)=>{
        const {query} = req
        const allCreations = await creationsService.findAllCreations(query)

        const data = JSON.stringify(allCreations)

        //etag module create a sha1 hash
        res.setHeader('etag',etag(data)) 
        // ici on va comparer les deux hashs
        const resEtag = res.get('etag')
        const reqEtag = req.get('etag')
        const resHeader = { etag:resEtag ,'if-none-match':'*'}
        const reqHeader = { etag: reqEtag ?? '','if-none-match':reqEtag ?? ''}
        
        const isFreshStatut = fresh(reqHeader,resHeader)
        if(isFreshStatut){
            console.log('Le client est à jour', 304)
            return res.sendStatus(304)
        }else{
            return res.json(allCreations)
        }

        
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