import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'], // ✅ 여기에 도메인 추가
  },
}

export default nextConfig
