# muka-logger
dev staging logger for web browser

* [muka-logger](https://kyobobook.atlassian.net/wiki/spaces/SAT/pages/608239705/muka-logger)

## Features

* [TypeScript](https://www.typescriptlang.org/)
* [JEST](https://jestjs.io/)
* [GitHub Pages](https://pages.github.com/)
* [TSDoc](https://github.com/microsoft/tsdoc)
* [Docusaurus](https://docusaurus.io/ko/docs/category/getting-started)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/#summary)
* [Standard Version](https://github.com/conventional-changelog/standard-version)

## TODO

* [x] [design: interface](https://kyobobook.atlassian.net/wiki/spaces/SAT/pages/618725441/Muka+Logger+Interface+Design?atlOrigin=eyJpIjoiOTkzMWZmZjAwNWMyNDE2Zjk2MTQ3OWJkODYzYzQ5YTEiLCJwIjoiaiJ9)
* [x] design: branch
  * develop (default)
  * main (ci/cd)
  * release/{version}
  * feature/{version}
  * hotfix/{issue}
* [x] setup: .gitignore
* [x] setup: npm
* [x] setup: typescript
* [ ] release: ci/cd pipeline(github action)
* [ ] release-pipeline: build
* [ ] release-pipeline: bump up version & update changelog
* [ ] release-pipeline: publish npm
* [ ] release-pipeline: merge main branch & tagging

* [ ] setup: jest testing
* [ ] setup: eslint
* [ ] setup: lintstaged + husky
* [ ] setup: release build task
* [ ] release-pipeline: test
* [ ] release-pipeline: build:tsdoc
* [ ] release-pipeline: build:manual(docusaurus)
* [ ] release-pipeline: publish doc(github.io pages)
