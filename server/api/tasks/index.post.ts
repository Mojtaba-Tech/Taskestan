import {serverSupabaseClient} from "#supabase/server";
import {Database, TablesInsert} from "~/types/database.types";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const {taskList_id, title} = await readBody(event)
  const {data: {user}} = await client.auth.getUser()

  if(user) {
    const requestBody: TablesInsert<'tasks'> = {taskList_id, title}

    const {data, error} = await client.from('tasks').insert(requestBody).select()

    return {data, error}
  }

  return {error: 'You are not authorized to do that.'}
})