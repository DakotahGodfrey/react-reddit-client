// endpoints
export const base_url = "https://www.reddit.com/";
export function urlReplace(urlToReplace) {
  const string = urlToReplace;
  let newUrl = string.replace(/&amp;/g, "&");
  return newUrl;
}
