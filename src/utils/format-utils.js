export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

export function padLeftZero(num, len = 2) {
  if (String(num).length > len) return num
  return (Array(len).join(0) + num).slice(-len)
};

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  if (!parseInt(time)){
    return null
  }else {
    return formatDate(time, "mm:ss");
  }
}

export function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

// 时间戳转换成几分钟前，几小时前，几天前
export function formatMsgTime(dateTimeStamp) {
  let result = ''
  let minute = 1000 * 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let now = new Date().getTime()
  let diffValue = now - dateTimeStamp
  if (diffValue < 0) return
  let monthC = diffValue / month
  let weekC = diffValue / (7 * day)
  let dayC = diffValue / day
  let hourC = diffValue / hour
  let minC = diffValue / minute
  if (monthC >= 1) {
    result = '' + parseInt(monthC) + '月前'
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

export function lazyLoad(images) {
  const observer = new IntersectionObserver((entries => {
    Array.from(entries).map(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
      return true
    })
  }))
  Array.from(images).map(image => observer.observe(image))
}

// UTF8编码转成汉字字符串
export function revertUTF8(szInput) {
  let x, wch, wch1, wch2, szRet = "";
  for (x = 0; x < szInput.length; x++) {
    if (szInput.charAt(x) === "%") {
      wch = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
      if (!wch) {
        break;
      }
      if (!(wch & 0x80)) {
        console.log(wch)
        // wch = wch;
      } else if (!(wch & 0x20)) {
        x++;
        wch1 = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
        wch = (wch & 0x1F) << 6;
        wch1 = wch1 & 0x3F;
        wch = wch + wch1;
      } else {
        x++;
        wch1 = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
        x++;
        wch2 = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
        wch = (wch & 0x0F) << 12;
        wch1 = (wch1 & 0x3F) << 6;
        wch2 = (wch2 & 0x3F);
        wch = wch + wch1 + wch2;
      }
      szRet += String.fromCharCode(wch);
    } else {
      szRet += szInput.charAt(x);
    }
  }
  return (szRet);
}

// 获取是几几后
export function getAstro(timestamp) {
  let newDate = new Date()
  newDate.setTime(timestamp)
  let birthday = newDate.toLocaleDateString(timestamp)
  let birthdayArr = birthday.split('/')
  let year = birthdayArr[0].substring(birthdayArr[0].length - 2) + '后'
  let month = birthdayArr[1]
  let day = birthdayArr[2]
  return (
    year +
    ' - ' +
    '魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'.substr(
      month * 2 - (day < '102223444433'.charAt(month - 1) - -19) * 2,
      2
    ) +
    '座'
  )
}
