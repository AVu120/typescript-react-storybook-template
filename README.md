<h1 align="center">
  Typescript React Storybook Project Template
</h1>

## About

Project starter template that can be extended to quickly build a Storybook.js React UI component library in TypeScript. This template includes the ability to deploy to GitHub Pages, publish npm package to GitHub packages and deploy pull-request preview environments in Chromatic.

## View Storybook

Access [live QA environment](https://avu120.github.io/typescript-react-storybook-template/?path=/story/example-introduction--page).

## Contribute to Storybook.

### Publish to GitHub Package

1. Include

```
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
```

in the package.json.

2. In package.json, change value of "name" field to `@<GitHub-account-that-owns-repo>/typescript-react-storybook-template`. In the case of [my repo](https://github.com/AVu120/typescript-react-storybook-template), that would be

```
  "name": "@AVu120/typescript-react-storybook-template",
```

3. Enable GitHub Action workflow: .github\workflows\publish_github_package.yml (read comments in that file for instructions on how to enable it).
4. Disable .github\workflows\publish_to_npm_registry.yml.

### Publish to NPM Registry

1. Exclude

```
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
```

from package.json.

2. In package.json, change value of "name" field to `@<npm-account-username>/typescript-react-storybook-template`. In the case of [my profile](https://www.npmjs.com/~anthonyhienvu) in which I want to publish to https://www.npmjs.com/package/@anthonyhienvu/typescript-react-storybook-template, that would be

```
"name": "@anthonyhienvu/typescript-react-storybook-template"
```

3. Enable GitHub Action workflow: .github\workflows\publish_to_npm_registry.yml (read comments in that file for instructions on how to enable it).
4. Disable .github\workflows\publish_github_package.yml.

5. Increment the [semantic versioning](https://semver.org/) in the package.json file to reflect the changes you have made.
6. Create a pull-request (PR) to merge your feature branch into main branch.
7. Have relevant stakeholders inspect code/DOM/component/visual/story changes in the Chromatic PR preview environment. You can access this PR preview environment by going to the pull-request page:

- Click on the 'Details' link.
  ![image](https://user-images.githubusercontent.com/38395166/129433150-e74e28c7-43f3-4c22-9eb4-a7d88b6bef47.png)

8. After all changes have been approved in Chromatic & the PR has been approved on GitHub, merge & squash the PR into main.

### Update Live QA Environment

On completion of step 8, the updated Storybook will also be automatically deployed to the [live QA environment](https://avu120.github.io/typescript-react-storybook-template/?path=/story/example-introduction--page) (if .github\workflows\deploy_to_qa_env.yml is enabled).

## Consume from Storybook

### GitHub Package

1. Create a .npmrc file in the root of your project directory if it doesn't already exist.
2. Add this to your .npmrc file:

```
@<Github-account-that-owns-repo-hosting-the-GitHub-Package>:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=
```

E.g. for this template repo, this would be

```
@avu120:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=
```

3. [Generate a GitHub personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with repo, read:packages, write:packages permissions.
4. Add that token into the .npmrc file as follows (fake token used as example)

```
@avu120:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_hCL59WDSY2fj1SbJOiwA5hpA7Hao2w4mak29
```

5. Go to the [repo home page](https://github.com/AVu120/typescript-react-storybook-template).
6. Click on the typescript-react-storybook-template package link:

![image](https://user-images.githubusercontent.com/38395166/129418210-ad02b739-6570-4351-81f9-223795442bf8.png)

7. Follow the displayed instructions to import the package into your project.

### NPM Registry Package

1. Go to https://www.npmjs.com/package/@anthonyhienvu/typescript-react-storybook-template
2. Follow the instructions to import the package into your project.

## Author Contact Details

- Name: Anthony Hien Vu
- Email: avu120@gmail.com
