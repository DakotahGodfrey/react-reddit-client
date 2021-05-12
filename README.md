# <div align=center>React-Redux Reddit Client <br/> <div align=center> Challenge Project

### Project Requirements:

- App must be built using React and Redux.
- Version control application with Git and host the repository on GitHub.
- Use a project management tool (GitHub Projects, Trello, etc...)
- Write a README.md that documents the project including:
  - Wireframes
  - Technologies used
  - Features
  - Future work
- Write unit tests for the app's components using Jest and Enzyme
- Write E2E tests for the application.
- App is available on both desktop and mobile.
- Users can access the application live.
- Users see an intial view of the data when first visiting the app.
- Users can search the data using terms.
- users can filter the data based on categories that are predefined.
- Users are show a detail view(modal or new page/route) when they select an item.
- Users are delighted with a cohesive design system.
- users are delighted with animations and transitions.
- users are able to leave an error state.
- App gets 90+ scores on [Lighthouse](https://web.dev/measure/)
  - Note: it is understood that how media assets like videos and images are sent to the client, may impact performance. It is okay to have a score below 90 for Performance **if** they are related to media from Reddit.

OPTIONAL EXTRAS:

- custom domain name.
- set up CI/CD workflow to automatically deploy your application when the master branch in the repository changes.
- Make it a progressive web app,

## Setup

### The API

> For this project, we will be using the Reddit JSON API. There is no maintained documentation but the API is simple enough to use. We will provide you with some pointers on how to use it.
>
> Note that Reddit has 2 APIs: the official API and an undocumented JSON API. You are welcome to use either APIs but we recommend using the JSON API because it doesn’t require an OAuth workflow. Using the JSON API does have limitations such as no write operations. For the purposes of this project, we find the JSON API adequate.
>
> You can take any Reddit URL, add .json at the end of it, and get JSON. For example, if you want to get the Popular page data in JSON:
>
> Original URL: https://www.reddit.com/r/popular/<br>
> JSON URL: https://www.reddit.com/r/popular.json
