export interface RegisterDto {
    name: string,
    email: string,
    birth: string,
    phone: string,
    password: string
}

export interface LoginDto{
    email: string,
    password: string
}