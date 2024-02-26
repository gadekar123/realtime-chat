import type { Session,User} from 'next-auth'
import type {JWT} from 'next-auth/jwt'

type UserId = string

//this to get intellisence for out session callbacks in the next auth

declare module 'next-auth/jwt' {
    interface JWT {
        id:UserId
    }
}

declare module 'next-auth'{
    interface Session {
        user: User & {
            id:UserId
        }
    }
}