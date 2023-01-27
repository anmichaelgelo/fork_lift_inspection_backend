module.exports.getTimestamp = () => {
    // for more info about Dates you check here https://www.w3schools.com/js/js_dates.asp
    const current = new Date();
    const year = current.getFullYear(); // get the current year
    const month = current.getMonth() + 1; // getMonth() starts with 0, so add 1 to match with the current month
    const day = current.getDate(); // get the current day date
    const hour = current.getHours(); // get the current hour
    const seconds = current.getSeconds(); // get the current seconds
  
    return year + '-' + month + '-' + day + ' ' + hour + ':' + seconds
}