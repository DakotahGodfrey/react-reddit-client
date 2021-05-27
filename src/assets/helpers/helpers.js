export const timeSince = (date) => {
  function yearsSinceDate(date) {
    const secondsInOneYear = 31536000;
    const secondsSinceDate = Math.floor((new Date() - date) / 1000);
    return ~~(secondsSinceDate / secondsInOneYear);
  }

  function monthsSinceDate(date) {
    const secondsInOneMonth = 2592000;
    const secondsSinceDate = Math.floor((new Date() - date) / 1000);
    return ~~(secondsSinceDate / secondsInOneMonth);
  }

  function daysSinceDate(date) {
    const secondsInOneDay = 86400;
    const secondsSinceDate = Math.floor((new Date() - date) / 1000);
    return ~~(secondsSinceDate / secondsInOneDay);
  }

  function hoursSinceDate(date) {
    const secondsInOneHour = 3600;
    const secondsSinceDate = Math.floor((new Date() - date) / 1000);
    return ~~(secondsSinceDate / secondsInOneHour);
  }

  function minutesSinceDate(date) {
    const secondsInOneMinute = 60;
    const secondsSinceDate = Math.floor((new Date() - date) / 1000);
    return ~~(secondsSinceDate / secondsInOneMinute);
  }

  if (yearsSinceDate(date) >= 1) {
    return `${yearsSinceDate(date)} years`;
  }

  if (monthsSinceDate(date) >= 1) {
    return `${monthsSinceDate(date)} months`;
  }

  // leap year
  if (monthsSinceDate(date) === 12) {
    return `1 year`;
  }

  if (daysSinceDate(date) >= 1) {
    return `${daysSinceDate(date)} days`;
  }

  if (hoursSinceDate(date) >= 1) {
    return `${hoursSinceDate(date)} hours`;
  }

  if (minutesSinceDate(date) >= 1) {
    return `${minutesSinceDate(date)} minutes`;
  }
  return "just now";
};

export const roundSubs = (subscribers) => {
  let roundedSubs;
  if (subscribers >= 1000000) {
    roundedSubs = Math.floor(subscribers / 1000000) + "m";
  } else if (subscribers >= 1000) {
    roundedSubs = Math.floor(subscribers / 1000) + "k";
  }
  return roundedSubs;
};
