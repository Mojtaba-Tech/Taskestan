import {serverSupabaseClient} from "#supabase/server";
import {Database, TablesInsert} from "~/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)
  const {board_id, title, settings} = await readBody(event)
  const {data: {user}} = await client.auth.getUser()

  if(user) {
    const requestBody: TablesInsert<'categories'> = {
      board_id,
      title,
      settings
    }

    const {data, error} = await client.from('categories').upsert(requestBody).select()

    return {data, error}
  }
})