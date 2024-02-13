import Creation from "#src/models/Creations";

const exposeServices = {

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
    }

}



export default exposeServices