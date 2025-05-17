export interface lyricItem {
  time: number
  content: string
}

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

// 递归的去处理一个歌词有多个时间点的情况，如下
// [03:05.32][01:28.24]这个夏天 融化了整个季节
function parse(item: any, result: any, arr: number[] = []) {
  // 匹配正则
  const res: any = parseExp.exec(item)
  if (res) {
    const time1 = res[1] * 60 * 1000
    const time2 = res[2] * 1000
    const time3 = res[3].length === 3 ? res[3] * 1 : res[3] * 10
    const time = time1 + time2 + time3
    arr.push(time)
    const content = item.replace(parseExp, '')
    // 如果content中还有正则能匹配到的内容，就继续匹配正则
    if (parseExp.exec(content)) parse(content, result, arr)
    else {
      // 此时contetnt中已经没有与时间有关的信息了，将arr中保存的time插入
      arr.forEach((time) => {
        result.push({ time, content })
      })
    }
  }
}

/**
 * 将歌词转化成对象数组的形式
 * @param lyric
 * @returns
 */
export function parseLyric(lyric: string): lyricItem[] {
  const result: lyricItem[] = []
  lyric.split('\n').map((item) => {
    parse(item, result)
  })
  return result.sort((a, b) => a.time - b.time)
}

/**
 * 返回指定大小的图片
 * @param size : 图片大小;
 * @param url 图片url
 * @returns 指定大小的图片的url
 */
export const imgUrl = (wSize: number, hSize: number, url?: string) => {
  if (!url) return

  if (url.includes('https')) {
    return `${url}?param=${wSize}y${hSize}`
  } else {
    url = url.replace(/http/, 'https')
    return `${url}?param=${wSize}y${hSize}`
  }
}

/**
 * 给出毫秒数，返回时间格式: mm:ss
 * @param time
 * @returns
 */
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60 / 1000)
  let res = ''
  if (minutes < 10) {
    res += '0'
    res += minutes
  } else {
    res += minutes
  }
  res += ':'
  const seconds = Math.floor((time / 1000) % 60)
  if (seconds < 10) {
    res += '0'
    res += seconds
  } else {
    res += seconds
  }
  return res
}
