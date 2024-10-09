import {serverSupabaseClient} from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const {boardId} = await getQuery(event)
  const {data} = await client.from('taskLists')
    .select(`id, title, settings, created_at, tasks (id, title, created_at)`)
    .order('id', { referencedTable: 'tasks', ascending: false })
    .eq('board_id', boardId as string)

  return data;
})