const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    
    _id: {type:Number, required:true},
    nom: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo_profil:String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('profile', UserSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
