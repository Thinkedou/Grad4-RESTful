import fresh from 'fresh'


const isFresh = (req,res)=>{
    const resEtag = res.get('etag')
    const reqEtag = req.get('etag')
    console.log({resEtag,reqEtag})
    try {
        const resHeader = { etag:resEtag ,'if-none-match':'*'}
        const reqHeader = { etag: reqEtag ?? '','if-none-match':reqEtag ?? ''}
        console.log(resHeader,reqHeader)
        const isFreshStatut = fresh(reqHeader,resHeader)
        console.log({isFresh:isFreshStatut})
        return isFreshStatut
    } catch (error) {
        console.log(error)
        throw error
        
    }
}


export {
    isFresh
}