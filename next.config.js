/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/waitlist',
            destination: 'https://auth.withtower.com/api/fe/v3/add_waitlist_user'
          }
        ]
      }
}

module.exports = nextConfig
