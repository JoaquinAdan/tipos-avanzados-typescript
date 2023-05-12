import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'Joaco',
  role: ROLES.CUSTOMER,
};

// esta funcion verifica si el rol del usuario actual es igual a ROLES.ADMIN y retorna un string dependiendo del resultado de la verificacion
export const checkAdminRole = () => {
  // esto es un guardian
  if (currentUser.role === ROLES.ADMIN) {
    return 'es admin';
  } else {
    return 'no es admin';
  }
};
const rta = checkAdminRole();
console.log(`${currentUser.username} ${rta}`);

// esta funcion recibe dos strings llamados role1 y role2 y verifica si el rol del usuario actual es igual a role1 o role2 y retorna un string dependiendo del resultado de la verificacion
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return 'es customer';
  }
  if (currentUser.role === role2) {
    return 'es seller';
  }
  return 'es admin';
};
const rta2 = checkRole(ROLES.CUSTOMER, ROLES.SELLER);
console.log('CheckRole', rta2);

// esta funcion recibe un array de strings llamado roles y verifica si el rol del usuario actual esta incluido en el array roles y retorna true o false dependiendo del resultado de la verificacion
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return 'es customer';
  }
  return 'es admin';
};
const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('CheckRoleV2', rta3);

// esta funcion recibe un numero indeterminado de argumentos y los guarda en un array llamado roles y luego verifica si el rol del usuario actual esta incluido en el array roles y retorna true o false dependiendo del resultado de la verificacion
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('CheckRoleV3', rta4);
