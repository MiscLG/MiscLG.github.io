const MILLIS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365.25;
const MILLISECONDS_IN_YEAR = MILLIS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR;
const AVG_MILLISECONDS_IN_MONTH = MILLISECONDS_IN_YEAR/12;
const MILLISECONDS_IN_DAY = MILLIS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY

function timeDifferenceByUnit( unit:number){
  return (startDate:Date,endDate:Date|number = Date.now()) =>{
    let startTime = startDate.getTime();
    let endTime = typeof(endDate)=="number"? endDate:endDate.getTime()
    return Math.floor((endTime - startTime)/unit);
  }
}

const yearDifference = timeDifferenceByUnit(MILLISECONDS_IN_YEAR)
const monthDifference = timeDifferenceByUnit(AVG_MILLISECONDS_IN_MONTH)
const dayDifference = timeDifferenceByUnit(MILLISECONDS_IN_DAY)

export {yearDifference,monthDifference,dayDifference}