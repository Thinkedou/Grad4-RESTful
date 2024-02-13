import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const creationSchema = new Schema({
    imgUri : {type:String, required:'url obligatoire'},
    prompt: String,
    categories: [Schema.Types.Mixed],
    comments:[Schema.Types.Mixed],
    author:Schema.Types.Mixed,
    publicationDate:{type:Date,default: Date.now}
},
{ timestamps: true }
);

const creationModel = mongoose.model('creations',creationSchema)

export default creationModel