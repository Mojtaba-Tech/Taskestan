export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      boards: {
        Row: {
          brief: string | null
          created_at: string
          description: string | null
          id: number
          order: number
          owner_id: string
          settings: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          brief?: string | null
          created_at?: string
          description?: string | null
          id?: number
          order?: number
          owner_id: string
          settings?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          brief?: string | null
          created_at?: string
          description?: string | null
          id?: number
          order?: number
          owner_id?: string
          settings?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "board_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: number
          order: number | null
          page_id: number | null
          settings: Json | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          order?: number | null
          page_id?: number | null
          settings?: Json | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          order?: number | null
          page_id?: number | null
          settings?: Json | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          board_id: number | null
          created_at: string
          id: number
          order: number | null
          settings: Json | null
          title: string | null
        }
        Insert: {
          board_id?: number | null
          created_at?: string
          id?: number
          order?: number | null
          settings?: Json | null
          title?: string | null
        }
        Update: {
          board_id?: number | null
          created_at?: string
          id?: number
          order?: number | null
          settings?: Json | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pages_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          category_id: number | null
          checklists: Json[] | null
          created_at: string
          description: string | null
          id: number
          order: number | null
          priority: string | null
          settings: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category_id?: number | null
          checklists?: Json[] | null
          created_at?: string
          description?: string | null
          id?: number
          order?: number | null
          priority?: string | null
          settings?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category_id?: number | null
          checklists?: Json[] | null
          created_at?: string
          description?: string | null
          id?: number
          order?: number | null
          priority?: string | null
          settings?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
      | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
      | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
      | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
      | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
