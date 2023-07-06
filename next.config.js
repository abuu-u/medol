/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@use '/styles/variables' as *;`,
  },
}

module.exports = nextConfig
