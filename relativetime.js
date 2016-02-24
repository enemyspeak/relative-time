// based on code by https://github.com/vpfaiz //
// http://stackoverflow.com/a/7641822 //

function relativeTime(time) {
    var date = time,
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400),
        year_diff = new Date().getFullYear() - date.getFullYear(),
        month_diff;
    if (year_diff > 0) {
    	month_diff = 12 - date.getMonth(); // months in the year of this date
    	month_diff += 12 * year_diff - 1;
    	month_diff += new Date().getMonth() - date.getMonth();
    } else {
    	month_diff = new Date().getMonth() - date.getMonth();
    }

    var year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDate();

	var daysInMonth = new Date(year, month, 0).getDate();

    if (isNaN(day_diff) || day_diff < 0)
        return (
            year.toString()+'-'
            +((month<10) ? '0'+month.toString() : month.toString())+'-'
            +((day<10) ? '0'+day.toString() : day.toString())
        );
    var r =
    ( 
        (
            day_diff == 0 && 
            (
                (diff < 60 && "just now")
                || (diff < 120 && "1 minute ago")
                || (diff < 3600 && Math.floor(diff / 60) + " minutes ago")
                || (diff < 7200 && "1 hour ago")
                || (diff < 86400 && Math.floor(diff / 3600) + " hours ago")
            )
        )
        || (day_diff == 1 && "Yesterday")
        || (day_diff < 7 && day_diff + " days ago")
        || (day_diff < daysInMonth && Math.ceil(day_diff / 7) + " weeks ago")
        || (month_diff == 1 && "1 month ago")
	    || (month_diff < 12 && month_diff + " months ago")
	    || (year_diff == 1 && "1 year ago")
        || (year_diff + " years ago")
    );
    return r;
}