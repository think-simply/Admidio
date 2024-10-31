// get random number
export const getUniqueNumber = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1)
    const day = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
  
    const uniqueNumber = Number(`${year}${month}${day}${hours}${minutes}${seconds}`)
  
    return uniqueNumber;
  }
