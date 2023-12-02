const nextJest = require("next/jest");

const createJestConfig = nextJest({
    "tsx": true,
    "ts": true,
    "js": true,
    "jsx": true,
    //
    dir: ".",
});

const config = {
  testEnvironment: "jest-environment-jsdom",
};


module.exports =  createJestConfig(config );
