// @ts-ignore
import {RealtimePostgresChangesPayload} from "@supabase/realtime-js";
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const {data} = await client.from('boards').select();

    return data;
})

