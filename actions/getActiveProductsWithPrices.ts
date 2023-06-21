import { ProductWithPrice } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'

const getActiveProductsWithPrice = async (): Promise<ProductWithPrice[]> => {
  const supabase = createServerComponentClient({
    // I don't need headers since I use supabase Server Component
    cookies: cookies,
  })

  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' })

  if (error) {
    console.log(error)
  }

  return (data as any) || []
}

export default getActiveProductsWithPrice
