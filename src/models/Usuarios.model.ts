import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';


interface IUsuarios extends Document {
    name: string;
    email: string;
    password: string;
    token: string;
    expired: Date;
}

const usuariosSchema = new Schema<IUsuarios>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: String,
    expired: Date
});

usuariosSchema.pre('save', async function(next) {

    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;
    next();
});

export default model<IUsuarios>('Usuario', usuariosSchema);