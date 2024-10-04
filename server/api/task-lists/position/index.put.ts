import {serverSupabaseClient} from "#supabase/server";
import {Database} from "~/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)
  const {taskListId, settings} = await readBody(event)
  const {data: {user}} = await client.auth.getUser()

  if(user) {
    const {data, error} = await client.from('taskLists').update({settings})
      .eq('id', taskListId)
      .select()

    return {data, error}
  }

  return {error: 'You are not authorized to do that.'}
})