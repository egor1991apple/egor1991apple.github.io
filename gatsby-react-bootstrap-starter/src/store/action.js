export const SelectOffersById = (offers_id,offers) =>{
    return offers.find(({id})=>id == offers_id)
}