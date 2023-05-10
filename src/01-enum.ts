export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const joacoUser: User = {
  username: 'Joaco',
  role: ROLES.ADMIN
}
console.log(joacoUser)
