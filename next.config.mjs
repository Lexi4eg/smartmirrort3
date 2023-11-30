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
        domains: ['openweathermap.org', 'apod.nasa.gov','static01.nyt.com'],
    },
};

export default config;
