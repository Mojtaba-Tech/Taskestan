import {serverSupabaseClient} from "#supabase/server";
import type {Database, TablesInsert} from "~/types/database.types";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient<Database>(event)
    const {title, brief, description} = await readBody(event)
    const { data: { user } } = await client.auth.getUser()

    if(user) {
        const requestBody: TablesInsert<'boards'> = {
            owner_id: user.id,
            title,
            brief,
            description
        }

        const {data, error} = await client.from('boards').upsert(requestBody).select();

        return {data, error}
    }

    return {}
})