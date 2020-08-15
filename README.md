# Tailwind Mix

![npm](https://img.shields.io/npm/v/tailwind-mix?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/tailwind-mix?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/tailwind-mix?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/tailwind-mix?style=for-the-badge)

This extension provides instant Tailwindcss support to Laravel Mix builds.

## Usage

First, install the extension.

```bash
npm install tailwind-mix --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('tailwind-mix');

mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .tailwind();
```

## Next steps

This package requires tailwind configuration (tailwind.js or tailwind.config.js), so don't forget to run:

```bash
npx tailwindcss init
```
Above command will create `tailwind.js` or `tailwind.config.js` file for you.

In case for any reason you want to change file name to different from default you can pass file path as an argument.

**Example:**

```js
mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .tailwind('./filename.js');
```

app.scss file example:

```scss
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```


And you're done! Compile everything down with `npm run dev`

[More information about the Tailwind directives](https://tailwindcss.com/docs/installation#2-add-tailwind-to-your-css) to your Sass/Less entry file.
