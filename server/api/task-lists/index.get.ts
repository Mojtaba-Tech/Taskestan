import {serverSupabaseClient} from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const {boardId} = await getQuery(event)
  const {data} = await client.from('taskLists').select().eq('board_id', boardId as string)

  return data;
})