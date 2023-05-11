import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'Joaco',
  role: ROLES.CUSTOMER,
};

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

//
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return 'es customer';
  }
  return 'es admin';
};

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('CheckRoleV2', rta3);

//
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('CheckRoleV3', rta4);
