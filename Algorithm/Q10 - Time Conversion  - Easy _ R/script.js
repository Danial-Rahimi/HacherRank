//www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
https: function timeConversion(time) {
  // AM or PM
  const middayFlag = time.slice(-2);
  const hour = time.slice(0, 2);
  const absTime = time.slice(0, time.length - 2);

  if (middayFlag === "PM") {
    if (hour === "12") {
      return absTime;
    }
    let newTime = `${Number(hour) + 12}`;
    return newTime.concat(time.slice(2, time.length - 2));
  } else if (middayFlag === "AM") {
    if (hour === "12") return "00".concat(time.slice(2, time.length - 2));

    return absTime;
  }
}

console.log(timeConversion("12:45:54PM"));
