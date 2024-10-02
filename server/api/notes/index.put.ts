import {serverSupabaseClient} from "#supabase/server";
import {Database} from "~/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const {noteId, settings} = await readBody(event)
  const {data: {user}} = await client.auth.getUser()

  if (user) {
    const {data, error} = await client.from('notes').update({settings})
      .eq('id', noteId)
      .select()
    return {data, error}
  }
})