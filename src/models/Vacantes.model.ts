import { Schema, model, Document } from 'mongoose';
import slug from 'slug';
import shortid from 'shortid';

interface IVacantes extends Document {
    title: string;
    company: string;
    location: string;
    salary?: string;
    contract: string;
    description: string;
    url: string;
    skills: string[];
    candidates: string[];
}

const vacantesSchema: Schema = new Schema<IVacantes>({
    title: {
        type: String,
        required: [true, 'El titulo es necesario'],
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true,
        required: [true, 'La ubicacion es necesaria']
    },
    salary: {
        type: String,
        default: 0,
        trim: true
    },
    contract: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        lowercase: true
    },
    skills: [String],
    candidates: [{
        name: String,
        email: String,
        cv: String
    }]
});

vacantesSchema.pre<IVacantes>('save', function(next) {
    const url = slug(this.title);
    this.url = `${url}-${shortid.generate()}`;

    next();
});


export default model<IVacantes>('Vacante', vacantesSchema);