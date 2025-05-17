/**
 * 歌曲详情
 */
export interface MusicListItem {
  name?: string // 歌曲标题
  id?: number // 歌曲ID
  ar?: { // 歌手列表
    id?: number
    name?: string
  }[]
  al?: { // 专辑，如果是DJ节目(dj_type != 0)或者无专辑信息(single == 1)，则专辑id为0
    id: number
    name: string
    picUrl: string
  }
  dt?: number // 歌曲时长
  lyric?: string // 歌词
  initFlag?: boolean // 初始化标识
  /*
  0: 免费或无版权
  1: VIP 歌曲
  4: 购买专辑
  8: 非会员可免费播放低音质，会员可播放高音质及下载
  fee 为 1 或 8 的歌曲均可单独购买 2 元单曲
  */
  fee?: number
  key?: string
  index?: number 
  arname?: string
  type?: string
}

export interface MusicDetail {
  reason?: string
  reasonId?: string
  songId?: number
}

export interface MusicList {
  dailySongs?: MusicListItem[]
  demote?: boolean
  fromCache?: boolean
  orderSongs?: MusicListItem[]
  recommendReasons?: MusicDetail[]
  songs?: MusicListItem[]
}

export interface MusicLyric {
  code?: number
  lrc?: {
    lyric?: string
    version?: number
  }
  needDesc?: boolean
  pureMusic?: boolean
  qfy?: boolean
  sfy?: boolean
  sgc?: boolean
}
