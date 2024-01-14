/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.

 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {

    publicRuntimeConfig: {
        myEnvVar: process.env.MY_ENV_VAR
    },


    images: {
        // @ts-ignore
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'openweathermap.org',
            port: '',
            pathname: '/**',
        },
            {
                protocol: 'https',
                hostname: 'apod.nasa.gov',
                port: '',
                pathname: '/**',
            },

            {
                protocol: 'https',
                hostname: 'static01.nyt.com',
                port: '',
                pathname: '/**',
            }
        ],

    },
};

export default config;
