import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'Joaco',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  // esto es un guardian
  if (currentUser.role === ROLES.ADMIN) {
    console.log('es admin');
  } else {
    console.log('no es admin');
  }
};

checkAdminRole();
