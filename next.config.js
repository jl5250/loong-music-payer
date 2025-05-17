/** @type {import('next').NextConfig} */
const nextConfig = {
  // 关闭严格模式
  reactStrictMode: false,
  // 配置图片来源
  images: {
    domains: [
      'p2.music.126.net',
      'p1.music.126.net'
    ]
  }
}

module.exports = nextConfig
