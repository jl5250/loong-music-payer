<h1 align="center">Lonng Music Player</h1>

<div align="center">

<h2>基于Nextjs开发的博客音乐播放器</h2>

![Stars](https://img.shields.io/github/stars/jl5250/loong-music-payer.svg?style=social)
![Forks](https://img.shields.io/github/forks/jl5250/loong-music-payer.svg?style=social)
![Watch](https://img.shields.io/github/watchers/jl5250/loong-music-payer.svg?style=social)

[npm-image]: http://img.shields.io/npm/v/antd.svg?style=flat-square

</div>

## 概述

MyBlog 音乐播放器提供三种交互形态:小圆型唱片、卡片播放器和歌曲列表。当用户将鼠标悬停在小圆唱片上时，它会自动滑出:点击后展示卡片播放器;点击卡片上的更多图标，则显示完整的歌曲列表。具体效果如下图所示:

![小圆型唱片](https://pic1.imgdb.cn/item/68288bb158cb8da5c8f932bd.png)
![卡片播放器](https://pic1.imgdb.cn/item/68288bb158cb8da5c8f932be.png)
![小圆型唱片](https://pic1.imgdb.cn/item/68288bb158cb8da5c8f932bf.png)

## 博客效果

我的博客：[starlightpathserver.fun](starlightpathserver.fun)

## 核心功能

### 1. 音乐播放控制

- [x] **播放/暂停**：支持用户随时控制音乐的播放与暂停。
- [x] **上一首/下一首**：通过点击按钮，用户可以快速切换至上一首或下一首歌曲。
- [x] **进度条**：实时显示歌曲播放进度，并允许用户拖动进度条跳转到指定位置。
- [x] **音量控制**：提供音量滑块供用户调整音量，并支持一键静音功能。

### 2. 播放列表管理

- [x] **创建播放列表**：用户可以创建个性化播放列表，并添加喜爱的歌曲。
- [ ] **随机播放**：即将推出随机播放模式，为用户提供歌曲的随机排列播放体验。
- [ ] **循环播放**：计划支持单曲循环和列表循环模式，满足不同用户的播放需求。

### 3. 歌词展示

- [x] **同步歌词**：在歌曲播放时，自动显示同步歌词，方便用户跟随演唱。
- [x] **模糊效果**：未来将增加歌词上下边缘的模糊效果，提升视觉体验。

### 4. 用户账户功能

- [ ] **登录/注册**：计划集成网易云账户登录功能，让用户能够播放VIP专属音乐。
- [ ] **音乐无限制**：致力于消除灰色不可点击列表，实现所有音乐的无障碍播放。
- [ ] **无损音质**：将支持无损音质播放，为用户提供更高质量的音乐享受。

### 5. 音乐探索

- [x] **每日推荐**：根据用户的听歌习惯，每日智能推荐新歌曲或专辑。
- [ ] **音乐电台**：未来将提供多种风格的音乐电台，供用户随机收听。
- [x] **排行榜**：展示当前最热门的歌曲和专辑，帮助用户紧跟音乐潮流。

## 运行

1. 下载代码
2. `npm i`
3. .env文件配置musicAPI URL地址，API为网易云API
4. `npm run dev`

## 未来计划

1. **代码优化**：作为我的首个开源项目，代码可能存在冗余，计划进行优化以提高代码质量。
2. **登录功能**：当前音乐播放器缺乏登录功能，导致无法播放VIP音乐，计划尽快实现。
3. **抽离代码**：打算未来一段时间将代码抽离出来，开源到GitHub上。
