import Creation from "#src/models/Creations";

const exposeServices = {

    findOneCreation: async ({id:_id})=>{
        try {
            const   oneCrea = await Creation.findOne({_id})
            return  oneCrea
        } catch (error) {
            throw new Error(error)
        }
    },
    findAllCreations: async ()=>{
        try {
            const   allCrea = await Creation.find()
            return  allCrea
        } catch (error) {
            throw new Error(error)
        }
    },
    createCreations: async (rawData)=>{

        try {
            const   creaToSave  = new Creation(rawData)
            const   newCrea     = creaToSave.save()   
            return  newCrea
        } catch (error) {
            throw new Error(error)
        }
    },
    updateCreation: async ({id,body})=>{

        try {
            const   updatedCrea  = await Creation.findOneAndUpdate(
                {
                    _id:id
                },
                {
                    body
                }
            ) 
            return  updatedCrea
        } catch (error) {
            throw new Error(error)
        }
    }

}



export default exposeServices