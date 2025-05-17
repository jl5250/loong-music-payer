import { MusicListItem, MusicLyric } from '@/types/music'
import { getLyric } from '@/api/music'
import { useMusicStore } from '../stores'

// 根据id获取歌词
export default async function useChangeLyric(item: MusicListItem) {
  if (item.id) {
    let res = (await getLyric(item.id)) as MusicLyric
    if (res.lrc?.lyric === '') {
      res.lrc.lyric = '[99:00.00]纯音乐，请欣赏\n'
    }
    useMusicStore.setState({
      currentLyric: res.lrc?.lyric as string
    })
  } else {
    useMusicStore.setState({ currentLyric: '' })
    return ' '
  }
}
