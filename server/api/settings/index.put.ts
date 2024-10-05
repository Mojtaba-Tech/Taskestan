import {serverSupabaseClient} from "#supabase/server";
import {Database, TablesInsert} from "~/types/database.types";
import moment from "moment";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)
  const {settings} = await readBody(event)
  const {data: {user}} = await client.auth.getUser()

  if(user) {
    const requestBody: TablesInsert<'settings'> = {
      user_id: user.id,
      settings,
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    const {data, error} = await client.from('settings').upsert(requestBody).select()

    return {data, error}
  }
})