import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  /**
   * NOTE
   *
   * TypeScript types can be generated with the Supabase CLI and passed to createMiddlewareClient to add type support to the Supabase client.
   * The getSession function must be called for any Server Component routes that use a Supabase client.
   */
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({
    req,
    res,
  })

  await supabase.auth.getSession()

  return res
}
