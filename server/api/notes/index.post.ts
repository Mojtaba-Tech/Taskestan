import {serverSupabaseClient} from "#supabase/server";
import {Database, TablesInsert} from "~/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)
  const {text, settings, board_id} = await readBody(event)
  const {data: {user}} = await client.auth.getUser()

  if(user) {
    const requestBody: TablesInsert<'notes'> = {
      text,
      settings,
      board_id
    }

    const {data, error} = await client.from('notes').upsert(requestBody).select();

    return {data, error}
  }
})