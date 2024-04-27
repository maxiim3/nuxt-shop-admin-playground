
export enum Privilege {
    customer,
    admin
}
export interface UserModel {
    id: string
    name: string
    email: string
    hashedPW: string
    type: Privilege
}

