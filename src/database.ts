import { connect } from 'mongoose';
import { MONGO_URI } from './enviroment';

const starConnection = async (): Promise<void> => {
    try {
        const db = await connect(MONGO_URI);
        console.log('connect to mongoDB', db.connection.name);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default starConnection;