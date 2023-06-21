'use client'

import { Database } from '@/types_db'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

interface SupabaseProvicerProps {
  children: React.ReactNode
}

const SupabaseProvider: React.FC<SupabaseProvicerProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>(),
  )

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider
