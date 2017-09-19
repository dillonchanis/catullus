import auth from './auth/routes';
import home from './home/routes';
import note from './notes/routes';
import errors from './errors/routes';

export default [...auth, ...home, ...note, ...errors];