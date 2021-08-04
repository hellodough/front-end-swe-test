
# Software Engineering Front-End Take Home Test

## Introduction and goals
The goal of this evaluation is to get an idea of how you approach project work. 

These include your ability to *plan*, *communicate*, and *execute* on direction provided to you. 

We have prepared a project that includes a boilerplate setup for a front-end utilizing Svelte-kit, and we are asking that you spend no more than three hours completing these objectives within the project. 

## Objective one: Rendering content from an API
We are looking for candidates that help us tell stories on the web and mobile. Content will often come from different sources, and integration with third party APIs is par for the course. 

We are looking for you to complete the following tasks: 

- [ ] Using the [Wordpress JSON API](https://www.obama.org/wp-json/wp/v2/updates), fetch and query for content to display on the homepage as a list of articles. The design and layout are up to you for these articles.  You **do not need** to render the entire article's content on the homepage.

- [ ] Utilizing [Svelte's routing capabilities](https://kit.svelte.dev/docs#routing), create a dynamic route that will match a slug URL to a wordpress article, as linked from the homepage content. (Tip: the `id` and the `slug` are related)

- [ ] Create a [layout](https://kit.svelte.dev/docs#layouts) for the homepage that puts the content front and center, focusing on the relevant media (such as images, video, and excerpts) as necessary.  Make sure you can re-use this layout in the individual content pages, within reason.

- [ ] (OPTIONAL) [Transition](https://svelte.dev/docs#svelte_transition) cleanly between the homepage and the content page, potentially adding an [animation](https://svelte.dev/docs#svelte_animate) or [microinteractions](https://www.youtube.com/watch?v=tPoRAL7Lm1M) between pages, or potentially adding "[Juice](https://www.youtube.com/watch?v=Fy0aCDmgnxg)" to the interactions. Use your discretion! this a chance to flex your skills. 

## Objective two: Implementation and Approach
This project is representitive of how we develop front ends at the foundation. Your approach should consider the following objectives: 

- [ ] Consider how to utilize shared components between the homepage and article page. 

- [ ] What is your [lighthouse](https://developers.google.com/web/tools/lighthouse/) score? What improvements could you make?

- [ ] The project is set up to utilize [TailwindCSS / PostCSS](https://tailwindcss.com/). Be sure to utilize this in your approach; The goal is to write as little CSS as necessary. 

- [ ] Where necessary, add comments explaining your approach for other developers.

- [ ] Consider [accessibility](https://svelte.dev/docs#Accessibility_warnings) in your implementation -- the [WCAG Quickref](https://www.w3.org/WAI/WCAG21/quickref/) will give you an overview of what elements to consider for accessibility. 

## Objective three: Deployment
In order to evaluate your work, we would like to be able to consume it in a browser.  The easiest way to do something like this would be github pages, which you can utilize for free.  A simple guide is available [here](https://svelteland.github.io/svelte-kit-blog-demo/deply-to-github/).

You are more than welcome to deploy to netlify, vercel, or other static hosting of your choice. The list of available adapters are listed [here](https://github.com/sveltejs/kit/tree/master/packages). 

## Completing the Project
- Please fork this repository, don't clone. 
- When you have completed your work, send an email to your coordinator with a link to the repository. 
- We will schedule a code review as soon as we are able. 
- Please be sure to include a link to the deployed site along with the link to your completed repository.  

## Developing

Once you've forked this project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
