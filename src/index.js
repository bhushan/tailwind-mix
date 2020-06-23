const mix = require('laravel-mix');

const fs = require('fs')

class Tailwind {
    dependencies() {
        this.requiresReload = `
            Tailwind has now been installed. Please ensure that
            your configuration file (tailwind.js or tailwind.config.js)
            has been created, and then run "npm run dev".
        `;

        return ['tailwindcss'];
    }

    register(oldConfigPath = './tailwind.js') {
        let newConfigPath = './tailwind.config.js';

        if (fs.existsSync(oldConfigPath)) {
            this.configPath = oldConfigPath;
        } else if (fs.existsSync(newConfigPath)) {
            this.configPath = newConfigPath;
        } else {
            throw 'Error: File tailwind.js or tailwind.config.js doesn\'t exist.';
        }
    }

    boot() {
        if (Mix.components.has('sass')) {
            Config.processCssUrls = false;
        }

        if (Mix.components.has('postCss') && Mix.seesNpmPackage('postcss-import')) {
            Config.postCss.push(require('postcss-import'));
        }

        const tailwindcss = require('tailwindcss');

        Config.postCss.push(tailwindcss(this.configPath));
    }
}

mix.extend('tailwind', new Tailwind());