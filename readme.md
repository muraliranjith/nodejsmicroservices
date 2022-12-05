### create a api folder
    -auth
### create a setup in package.json file 

## install dependency packages 
    - npm i --save express  typescript ts-node 
    - npm i --save-dev jest supertest ts-jest @types/- - express @types/node nodemon 
### es-lint plugins install
    - npm install --save-dev eslint-config-airbnb-base
    - npm install --save-dev eslint-plugin-import
    - npm install --save-dev eslint
    - npm install prettier eslint-config-airbnb-typescript-prettier --save-dev
    - npm i lint-staged husky --save-dev
    - npm install --save-dev @types/supertest
    - npm i --save-dev @types/jest
### es lint docs to check how to work eslint and how to give rules.
    - https://eslint.org/docs/latest/rules/
    - create an .eslintrc.js file
    - and create a content
                module.exports = {
            extends: "airbnb-base",
            env: {
                "es6": true,
                "browser": true
            },
            rules: {
                "brace-style": ["error", "stroustrup"],
                "comma-dangle": ["error", "never"],
                "no-unused-vars": ["warn"],
                "no-var": ["off"],
                "one-var": ["off"]
            }
        }
