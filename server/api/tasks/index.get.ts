import {serverSupabaseClient} from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const {taskListId} = await getQuery(event)
  const {data} = await client.from('tasks').select().eq('taskList_id', taskListId as string)

  return data;
})