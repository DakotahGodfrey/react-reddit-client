// endpoints
export const base_url = "https://www.reddit.com/";
export const popular_url = "https://www.reddit.com/r/popular/.json";
export function urlReplace(urlToReplace) {
  const string = urlToReplace;
  let newUrl = string.replace(/&amp;/g, "&");
  return newUrl;
}
