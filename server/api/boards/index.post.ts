import {serverSupabaseClient, serverSupabaseUser} from "#supabase/server";
import type {Database} from "~/types/database.types";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient<Database>(event)
    const {title, brief, description} = await readBody(event)
    const { data: { user } } = await client.auth.getUser()

    // return {
    //     owner_id: user?.id,
    //     title,
    //     brief,
    //     description
    // }

    if(user) {
        const {error} = await client.from('boards').insert({
            owner_id: user.id,
            title: title,
            brief: brief,
            description: description
        })

        // console.log("--->", serverSupabaseUser(event))
        return {method: "POST", error, user: user}
    }

    return {}
})