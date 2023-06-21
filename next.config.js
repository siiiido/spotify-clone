/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['qjupytmjtoeodajsfcbc.supabase.co'],
  },
  // TODO: not working
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig
