export interface AuthResponse {
    ok: boolean,
    msg: string,
    uid?: string,
    email?: string,
    token?: string,
}

export interface User {
    email: string,
    password: string
}