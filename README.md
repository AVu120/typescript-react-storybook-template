<h1 align="center">
  Typescript React Storybook Project Template
</h1>

## About

This is a starter template that can be extended to quickly build a [Storybook](https://storybook.js.org/) React UI component library in TypeScript. This template includes the ability to:

- deploy the Storybook to [GitHub Pages](https://pages.github.com/)
- publish npm package of the UI component library to [GitHub Packages](https://github.com/features/packages) or the [npm registry](https://www.npmjs.com/)
- deploy preview Storybook environments in [Chromatic](https://www.chromatic.com/) on creation of pull-requests (to merge into the main branch).

## View Storybook

Access [live QA environment](https://avu120.github.io/typescript-react-storybook-template/?path=/story/example-introduction--page) deployed on GitHub Pages.

## Contribute to Storybook.

### Publish to GitHub Package

1. Include

```
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
```

in the package.json.

2. In package.json, change value of the "name" field to `@<GitHub-account-that-owns-repo>/typescript-react-storybook-template`. In the case of [my repo](https://github.com/AVu120/typescript-react-storybook-template), that would be

```
  "name": "@AVu120/typescript-react-storybook-template",
```

3. Enable [GitHub Actions](https://github.com/features/actions) workflow: .github\workflows\publish_github_package.yml (read comments in that file for instructions on how to enable it).
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

3. Enable GitHub Actions workflow: .github\workflows\publish_to_npm_registry.yml (read comments in that file for instructions on how to enable it).
4. Disable .github\workflows\publish_github_package.yml.

5. Increment the [semantic versioning](https://semver.org/) in the package.json file to reflect the changes you have made.
6. Create a pull-request (PR) to merge your feature branch into the main branch.
7. Have relevant stakeholders inspect code/DOM/component/visual/story changes in the Chromatic PR preview environment. You can access this PR preview environment by going to the pull-request page:

- Click on the 'Details' link.

  ![image](https://user-images.githubusercontent.com/38395166/129433150-e74e28c7-43f3-4c22-9eb4-a7d88b6bef47.png)

- Click on one of the links below to see the full updated Storybook or only the PR changes deployed in Chromatic.

  ![image](https://user-images.githubusercontent.com/38395166/129433211-9f58e142-6153-4240-a7ae-b08bc950686e.png)

- If you open the build details on Chromatic, you'll see a summary of the changes in the PR:

![image](https://user-images.githubusercontent.com/38395166/129433852-107b1d3a-d627-44e1-a9e1-86332393288f.png)

- Click on the 'Review changes' button to drill-down into each change.

![image](https://user-images.githubusercontent.com/38395166/129433895-e2f2ebb5-af71-4a45-9d82-3b6735df277a.png)

8. After all the changes have been accepted in Chromatic & the PR has been approved on GitHub by relevant stakeholders, merge & squash the PR into main.

### Update Live QA Environment

On completion of step 8, the updated Storybook will be automatically deployed to the [live QA environment](https://avu120.github.io/typescript-react-storybook-template/?path=/story/example-introduction--page) (if .github\workflows\deploy_to_qa_env.yml is enabled).

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
- LinkedIn: www.linkedin.com/in/anthony-hien-vu
- Online Resume/Portfolio: https://avu120.github.io/portfolio/
