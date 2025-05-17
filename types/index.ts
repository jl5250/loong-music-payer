// 定义响应数据类型
interface ResponseData<T> {
  code: number
  data: T
}

// 定义请求配置类型
interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  api: string
  data?: Record<string, any>
  caching?: boolean
}
