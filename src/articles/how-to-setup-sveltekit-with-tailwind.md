---
title: Building Beautiful Web Apps with SvelteKit and Tailwind CSS
thumbnail: how-to-setup-sveltekit-with-tailwind.webp
description: Discover the perfect combination of SvelteKit and Tailwind CSS to build visually stunning and responsive web apps. This step-by-step guide will help you set up your SvelteKit project with Tailwind CSS, empowering you to create captivating designs and streamline your development process. Unleash your creativity and take your web apps to the next level.
date: '2023-6-25'
tags:
  - sveltekit
published: false
---

<script>
  // TODO Add tailwind configuration section
</script>

Are you ready to dive into the exciting world of web development? With the dynamic duo of SvelteKit and Tailwind CSS, creating stunning and responsive web applications has never been more enjoyable. In this article, we'll take you on a personal journey to set up your very own SvelteKit project with Tailwind CSS.

## Prerequisites
Before we get started, make sure you have Node.js and npm (Node Package Manager) installed on your computer. Don't worry if you haven't got them yet – you can grab them from the official [Node.js website](https://nodejs.org). Once you're all set, let's jump right in!


## Initializing a SvelteKit Project
Alright, let's fire up your terminal and head over to the directory where you want to create your awesome project. Now, run the following command to initialize a fresh SvelteKit project:

```shell
npm create svelte@latest my-app
```

During the installation process, you'll be presented with a few options to customize your project:

```shell
┌  Welcome to SvelteKit!
│
•  Which Svelte app template?
│  Skeleton project
│  # enter to confirm
│
•  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│  # enter to confirm
│
•  Select additional options // 
│  Add ESLint for code linting, Add Prettier for code formatting
│  # use arrow keys/space bar to select, enter to confirm
│
└  Your project is ready!
```

After that, **cd** into the folder you just created:

```shell
cd my-app
```

And install all the dependencies:

```shell
npm install
```

Great! You're now the proud owner of a SvelteKit project. To start the development server, simply run the following command:

```shell
npm run dev
```

Now you can preview your project by visiting [http://localhost:5173/](http://localhost:5173/). Keep in mind that there won't be much to see just yet, as we haven't added any content. If you ever need to stop the server, simply use the keyboard shortcut CTRL + C. 

## Installing Tailwind CSS

Now, let's bring Tailwind CSS into the mix. We'll need to install it along with a few other dependencies, so execute this npm command:

```shell
npm install tailwindcss postcss autoprefixer
```

Create a **tailwind.config.js** and **postcss.config.js** files in the root of your project by running the following command:

```shell
npm tailwindcss init -p
```

Add the paths to all of your template files in your **tailwind.config.js** file.

#### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Now that Tailwind CSS is configured, we need to add its directives into our app.css file. Open the **/src/app.css** file in your project and add the following line at the top:

#### app.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
 
One last thing before we're done! Go to **/src/routes/+layout.svelte** and make sure the **app.css** is imported:


#### +layout.svelte
```svelte
<script lang="ts">
    import "../app.css";
</script>

<div class="app">
    <main>
        <slot />
    </main>
</div>
```

Now you're all set! However, you might still notice that your project is a blank canvas. But worry not, we're about to add some life and color to it.

## Creating a Simple Webpage

Now that our project is set up with SvelteKit and Tailwind CSS, let's create a simple webpage to see them in action together.

Open the **src/routes/+page.svelte** file in your project's directory and overwrite everything with the following code:

#### +page.svelte
```svelte
<script lang="ts">
    let name: string = 'your-name';
</script>

<div class="min-h-screen bg-gray-300 p-4 text-center">
    <h1 class="text-3xl font-bold mb-4">
        Hello, { name }!
    </h1>
    <p class="text-lg">This is a simple webpage built with SvelteKit and Tailwind CSS.</p>
</div>
```

It may not win a "Next Gen Website" competition, but for our purposes, it will be more than sufficient. To apply the changes and see them immediately on the website, simply press **CTRL + S** to save the file. The development server will automatically update the webpage with your modifications.

You can also bind Tailwind classes to your custom logic:

#### +page.svelte
```svelte
<script lang="ts">
    let name: string = 'sveltekit';

    function checkName(x: string): boolean {
      const lowercaseX = x.toLowerCase();
      const lowercaseName = name.toLowerCase();
      return lowercaseX === lowercaseName;
    }
</script>

<div class="min-h-screen bg-gray-300 p-4 text-center">
    <h1 class="text-3xl font-bold mb-4">
        Hello, <span class:text-orange-500={checkName("sveltekit")}>{ name }</span>!
    </h1>
    <p class="text-lg">This is a simple webpage built with SvelteKit and 
        <span class="{checkName("sveltekit") ? "text-blue-600 font-bold" : "text-red-500 font-light"}">
            Tailwind CSS
        </span>.
    </p>
</div>
```

## Conclusion

Congratulations! You have successfully set up a SvelteKit project with Tailwind CSS. Now you can dive into the exciting world of building beautiful and responsive web applications using these powerful tools. Happy coding!