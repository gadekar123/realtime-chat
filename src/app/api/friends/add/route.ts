//handle the post req

import { authOptions } from "@/lib/auth"
import { fetchRedis } from "@/lib/helpers/redis"
import { addFriendValidator } from "@/lib/validations/add-friend"
import { getServerSession } from "next-auth"


export async function POST(req: Request) {
    try {
        const body = await req.json()

        const {email:emailToAdd} = addFriendValidator.parse(body.email)

        const RESTResponse = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/user:email${emailToAdd}`,{
            headers: {
                Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`
            },
            cache: 'no-store',
        })

        const data = (await RESTResponse.json()) as {result: string}
        const idToAdd = data.result

        if(!idToAdd){
            return new Response('this person does not exists')
        }

     

        const session = await getServerSession(authOptions)

        if(!session){
            return new Response('Unauthorised',{status:401})
        }

        if(idToAdd === session?.user.id) {
            return new Response("You cannot friend yourself",{status:400})
        }

        //valid request 
        const isAlreadyAdded = await fetchRedis('sismember', `user:${idToAdd}:incoming_friend_requests`,session.user.id) as 0 | 1

        if(isAlreadyAdded){
            return new Response("already added this user ", {status:400})
        }

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}