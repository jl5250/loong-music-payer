'use client'

import type { MusicList, MusicListItem } from '@/types/music'
import { useMusicStore } from '@/stores'
import img from '@/public/playing.gif'
import Image from 'next/image'
import { formatTime } from '@/utils'
import { LIST_NULL_TEXT } from '@/constant'
import { IAudio } from '@/hooks/useAudio'
import { useEffect, useState, useCallback } from 'react'
import { getPlayListTrack, getLike } from '@/api/music'
import useSwitchCurrentMusic from '@/hooks/useSwitchCurrentMusic'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@heroui/react'

interface Props {
  id?: number // 传入各个排行版的id
  type: string // 传入各个排行版的类型
  audioInfo: IAudio // 传入当前播放的音乐信息
}

type ColumnKey = 'index' | 'name' | 'arname' | 'dt'

interface Column {
  key: ColumnKey
  label: string
}

const columns: Column[] = [
  {
    key: 'index',
    label: ''
  },
  {
    key: 'name',
    label: '歌曲'
  },
  {
    key: 'arname',
    label: '歌手'
  },
  {
    key: 'dt',
    label: '时长'
  }
]

export default function MusicList(props: Props) {
  const { id, type, audioInfo } = props

  const {
    currentMusic,
    surgeMusicList,
    hotMusicList,
    newMusicList,
    originalMusicList,
    dailyMusicList,
    changeCurrentMusicType,
    changeSurgeMusicList,
    changeHotMusicList,
    changeNewMusicList,
    changeOriginalMusicList,
    changeDailyMusicList
  } = useMusicStore()

  const [list, setList] = useState<MusicListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [disabledKeys, setDisabledKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState(new Set(['']))

  // 使用useMemo优化当前音乐列表的选择
  useEffect(() => {
    if (currentMusic.id) {
      setSelectedKeys(new Set([currentMusic.id.toString()]))
    }
  }, [currentMusic.id])

  // 使用useMemo优化音乐类型设置
  useEffect(() => {
    changeCurrentMusicType(type)
  }, [type, changeCurrentMusicType])

  // 使用useCallback优化列表数据处理
  const processList = useCallback((listMap: MusicListItem[]) => {
    const processedList = listMap.map((item, index) => ({
      ...item,
      key: item.id?.toString() || '',
      index,
      arname: item.ar?.[0]?.name || '未知歌手'
    }))

    setList(processedList)

    const vipSongs = processedList
      .filter((item) => item.fee === 1 || item.fee === 4)
      .map((item) => item.key)
    setDisabledKeys(vipSongs)
  }, [])

  // 使用useCallback优化数据获取
  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      if (id === undefined && type === 'like') {
        const res = (await getLike()) as ResponseData<MusicList>
        const { dailySongs } = res.data

        changeDailyMusicList(dailySongs || [])
        processList(dailyMusicList)
      } else if (id !== undefined) {
        const res = await getPlayListTrack(id)
        
        switch (type) {
          case 'surge':
            changeSurgeMusicList(res.songs || [])
            processList(surgeMusicList)
            break
          case 'hot':
            changeHotMusicList(res.songs || [])
            processList(hotMusicList)
            break
          case 'new':
            changeNewMusicList(res.songs || [])
            processList(newMusicList)
            break
          case 'original':
            changeOriginalMusicList(res.songs || [])
            processList(originalMusicList)
            break
        }
      }
    } catch (error) {
      console.error('Failed to fetch music list:', error)
    } finally {
      setLoading(false)
    }
  }, [id, type, processList])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // 使用useCallback优化单元格渲染
  const renderCell = useCallback(
    (item: MusicListItem, key: ColumnKey) => {
      if (key === 'dt') {
        return formatTime(item[key] || 0)
      }
      if (key === 'index') {
        return currentMusic.id === item.id ? (
          <Image src={img} alt="正在播放" className="w-4 h-4" />
        ) : (
          (item.index || 0) + 1
        )
      }
      return item[key] || ''
    },
    [currentMusic.id]
  )

  // 使用useCallback优化行点击处理
  const handleRowClick = useCallback(
    (item: MusicListItem) => {
      if (currentMusic.id === item.id || item.fee === 1 || item.fee === 4) return // 如果当前点击的歌曲是正在播放的歌曲或者是VIP歌曲，则不执行任何操作

      const timer = setTimeout(() => {
        useSwitchCurrentMusic(item)
        audioInfo.setIsMusic(true)
      }, 200)

      return () => clearTimeout(timer)
    },
    [currentMusic.id, audioInfo]
  )

  return (
    <Table
      isVirtualized
      maxTableHeight={510}
      rowHeight={30}
      disabledKeys={disabledKeys}
      selectionMode="single"
      disallowEmptySelection
      selectedKeys={selectedKeys}
      isStriped
      fullWidth
      className="w-[360px] h-[360px] md:h-[500px] md:w-[510px]"
    >
      <TableHeader columns={columns}>
        {(column: Column) => (
          <TableColumn key={column.key} className="text-sm font-medium">
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        emptyContent={LIST_NULL_TEXT}
        isLoading={loading}
        loadingContent={
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }
      >
        {list.map((item) => (
          <TableRow
            key={item.key}
            onClick={() => handleRowClick(item)}
            className="hover:cursor-pointer"
          >
            {(columnKey) => (
              <TableCell className="text-sm">{renderCell(item, columnKey as ColumnKey)}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
