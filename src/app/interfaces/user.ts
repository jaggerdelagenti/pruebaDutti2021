export interface IUser {
    _id:number,
    first_name: string,
    last_name:string,
    username:string,
    email:string,
    password:string,
    passwordConfirm:string,
    returnSecureToken:boolean
}
