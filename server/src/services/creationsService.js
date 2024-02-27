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
    findAllCreations: async (query)=>{
        // là ici je vais manipuler ma query
        // pour en faire un objet mongod 
        // query {categories:'ynov'}
        const {
            sort=false,
            fields=false,
            ...rest
        } = query
        const filtering  = {...rest}
        const sorting = {}
        if(sort.indexOf('-')>=0){
            const cleanField = sort.slice(1,sort.length)
            sorting[cleanField]=-1
          }else{
            sorting[sort]=1
        }
        const options = {sort:{...sorting}}
        try {
            const   allCrea = await Creation.find(filtering,{},options)
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
                {_id:id},
                body,
                {new:true}
            ) 
            return  updatedCrea
        } catch (error) {
            throw new Error(error)
        }
    },
    patchCreation: async ({id,body})=>{
        //TODO: rendre dynamique l'attribution du addToSet
        const {
            categories=false,
            ...rest
        } = body
        const updateQ = {
            $addToSet:{
                categories:{
                    $each:categories
                }
            },
            ...rest
        }
        try {
            const   patchCrea  = await Creation.findOneAndUpdate(
                {_id:id},
                updateQ,
                {new:true}
            ) 
            return  patchCrea
        } catch (error) {
            throw new Error(error)
        }
    }

}



export default exposeServices