const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UserSchema = new Schema ({

    email:{
        type:String,
        required:"E-mail is mandatory"
    },
    password:{
        type:String,
        required:"Password is mandatory"
    }
})
 
UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
});


UserSchema.statics.login = async function(email, password) {
    const User = await this.findOne({ email });
    if (User) {
      const auth = await bcrypt.compare(password, User.password);
      if (auth) {
        return User;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
  };

const User = mongoose.model('User',UserSchema);
module.exports  = User;