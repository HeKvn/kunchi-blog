export function formatDate (time: string, format = 'YY-MM-DD hh:mm:ss'): string {
  const date = new Date(time)

  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()
  const hour = date.getHours().toString()
  const min = date.getMinutes().toString()
  const sec = date.getSeconds().toString()

  const newTime = format.replace(/YY/g, year).replace(/MM/g, month).replace(/DD/g, day).replace(/hh/g, hour).replace(/mm/g, min).replace(/ss/g, sec)

  return newTime
}
