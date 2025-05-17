// 最新调整：在 .env 文件中配置音乐项目后端 API 地址
const BASE_URL = process.env.NEXT_PUBLIC_MUSIC_API

/**
 * 通用请求工具函数
 * @param config 请求配置
 * @returns Promise<ResponseData<T>>
 */
export default async function request({ method, api, data, caching = true }: RequestConfig) {
  try {
    const response = await fetch(`${BASE_URL}${api}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      ...(method === 'POST' && { body: JSON.stringify(data || {}) }),
      cache: caching ? 'force-cache' : 'no-store'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('请求发生错误：', error)
    throw error // 向上抛出错误，让调用者处理
  }
}
