## Technologies (tailwind-react-next.js-typescript-eslint)

I used the latest technologies for this assignment. 
- I used tailwind css and postcss works as a CSS-preprocessor. 
- I coded high-level typescript code so that it can avoid type errors and has a great scalability and maintainabilty.
- I used react and next.js to improve performance and make website SEO friendly. Next.JS handles all the production and build. I setup an optimized compiler swcrc and next.js handles the static content build.

The reason I select these tech stack is these are the latest ones and it provides great performance and saves time. 
For example regarding for tailwind css, it automatically preprocess all the css classes and css files and creates the final css.

Furthermore Next.JS provides three functionalities
	- It comes with a built-in CSS support that allows developers to import CSS files from a JavaScript file.
	- It also possesses a built-in Automatic Image Optimisation feature that automatically optimizes images by using the image component.
	- It gives developers the liberty of updating existing pages by re-rendering them in the background alongside the incoming traffic.

For maintainability I used blogs.json and save it in the public/data folder.
So if you change the JSON content of blogs.json then it will directly affects to page.
You may feel like fetching the json data from the server.

## Better way

After I had completed this task I checked my code and found a better solution.

It would be great if I used styled component instead of tailwind css in this case.
It would be great if I implemented unit testing with Jest(I've setup Jest environment and test commands on this project)
**But this site is quite small and all the contents are static so we need very low level unit testing.**

## Production

I've pushed `production.rar` which was created by `yarn production` command.
You can simply deploy it on anytypes of static server easily.

## Git

I created a public repository and pushed into that repository.
I created multiple github commits.


## Commands

These are commands that developers can use.
- `yarn dev`: To start a local development server.
- `yarn format`: To autoformat all the issues.
- `yarn export`: Run this after running `yarn analyze` to export a build copy.
- `yarn production`: To export a production build. Use `yarn start` to serve that.
- `yarn upgrade --latest`: To upgrade all packages to their latest versions (could include breaking changes).