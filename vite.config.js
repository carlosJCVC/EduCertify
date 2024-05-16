import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/sass/tabler.scss',
                'resources/js/tabler.js',
                'resources/sass/vendor/fonts/tabler-icons.scss',

                /**
                 * Modules
                 */
                'resources/js/src/users/list-users.js',
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            // '~tabler': path.resolve(__dirname, 'node_modules/@tabler/core'),
            // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '@': '/resources/js',
        }
    },
});
