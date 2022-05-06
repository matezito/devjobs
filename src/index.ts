import app from './app';
import starConnection from './database';


function main() {
    starConnection();
    app.listen(app.get('port'), () => {
        console.log('server on port', app.get('port'));
    });
}

main();