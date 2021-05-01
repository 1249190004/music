export const headerLinks = [
  {
    title: "音乐",
    link: "/"
  },
  {
    title: "发现音乐",
    link: "/discover"
  },
  {
    title: "排行榜",
    link: "/ranking"
  },
  {
    title: "歌单",
    link: "/sheet"
  },
  {
    title: "歌手",
    link: "/singer"
  },
  {
    title: "视频",
    link: "/video"
  },
]
export const country = [
  {
    value: -1,
    label: '全部'
  },
  {
    value: 7,
    label: '华语'
  },
  {
    value: 96,
    label: '欧美'
  },
  {
    value: 8,
    label: '日本'
  },
  {
    value: 16,
    label: '韩国'
  },
  {
    value: 0,
    label: '其他'
  }
]
// 分类
export const classify = [
  {
    value: -1,
    label: '全部'
  },
  {
    value: 1,
    label: '男歌手'
  },
  {
    value: 2,
    label: '女歌手'
  },
  {
    value: 3,
    label: '乐队'
  }
]

// 字母A_Z
export const ens = () => {
  let arr = Array(26).fill("").map((_, index) => ({
    value: String.fromCharCode(97 + index),
    label: String.fromCharCode(65 + index)
  }))
  arr.unshift({
    value: '-1',
    label: '热门'
  })
  arr.push({
    value: '0',
    label: '其他'
  })
  return arr
}

//Mv

export const areaList = [
  {
    value: '全部',
    label: '全部'
  },
  {
    value: '内地',
    label: '内地'
  },
  {
    value: '港台',
    label: '港台'
  },
  {
    value: '欧美',
    label: '欧美'
  },
  {
    value: '日本',
    label: '日本'
  },
  {
    value: '韩国',
    label: '韩国'
  }
]

export const classifys = [
  {
    value: '全部',
    label: '全部'
  },
  {
    value: '官方版',
    label: '官方版'
  },
  {
    value: '原生',
    label: '原生'
  },
  {
    value: '现场版',
    label: '现场版'
  },
  {
    value: '网易出品',
    label: '网易出品'
  }
]

export const sortList = [
  {
    value: '上升最快',
    label: '上升'
  },
  {
    value: '最热',
    label: '最热'
  },
  {
    value: '最新',
    label: '最新'
  }
]

export const navList = [
  {
    name: '作品',
    id: 1
  },
  {
    name: '专辑',
    id: 2
  },
  {
    name: 'MV',
    id: 3
  },
  {
    name: '歌手详情',
    id: 4
  },
  {
    name: '相似歌手',
    id: 5
  }
]

//search
export const search = [
  {
    name: "单曲",
    type: 1
  },
  {
    name: "歌手",
    type: 100
  },
  {
    name: "专辑",
    type: 10
  },
  {
    name: "视频",
    type: 1014
  },
  {
    name: "歌单",
    type: 1000
  }
]
