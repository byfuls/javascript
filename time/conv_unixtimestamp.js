
let conv_date = unix_timestamp => {
    let date = new Date(unix_timestamp*1000);
    let hours = date.getHours();
    let minutes = "0"+date.getMinutes();
    let seconds = "0"+date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
};

let unix_timestamp = 1549312452;
console.log(conv_date(unix_timestamp));
