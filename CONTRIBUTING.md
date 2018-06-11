# CONTRIBUTING

When contributing to this repository, please first discuss the change you want to make via [`issue`](#issue), [`@linterhub/maintainers`](../../../teams/maintainers), or use any other method before making a change.

## Table of Contents

- [Development](#development)
  - [Test](#test)
  - [Import](#import)
  - [Release](#release)
- [Issue](#issue)
  - [Reporting a bug](#reporting-a-bug)
  - [Request a feature](#request-a-feature)
  - [Another questions](#another-questions)
- [Pull Request](#pull-request)
  - [Preparation](#preparation)
  - [Commit message](#commit-message)

## Development

Before starting development you need to [`install`](./README.md#install).

### Test

We use our tests suite basing on the [official JSON-schema test suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite). All test files are stored in `test` folder. To check a test run the following command:

```bash
gulp test
```

For more details about our tests please refer [`test`](./test/).

### Import

To update the list of licenses and languages run the following command:  

```bash
git submodule update
gulp import
```

This command changes the next files: `language.linguist.json` and `license.spdx.json` in folder `src\collection`. To read more about these files please refer folder [`src\collection`](./src/collection)

### Release

The follwong command creates the list of schemas' last versions in folder `dist`.

```bash
gulp release
```

## Issue

If you have any questions, or you've found a bug or want to share any idea, please create the relevant issue in this repository.

Please take into account some restrictions:

- Use the GitHub issue search — to ensure that the issue hasn't been already reported.

- The issue tracker shouln't be used for personal support requests (use Stack Overflow or IRC instead).

- If you want to suggest a Major Feature, please fiest submit an issue and desctibe your idea so that it can be discussed. It will help us coordinate our efforts in most suitable way, prevent duplication of work, and help you to craft the change so that it is successfully accepted into our project.

- Small Features can be crafted and directly submitted as a Pull Request.

### Reporting a bug

A bug is a demonstrable problem caused by the code in the repository. Thank you for essential bug reports!

Guidelines for bug reports:

- Check if the issue has been fixed and try to reproduce it using the latest master or development branch in the repository.

- Isolate the problem by creating a test case and a live example.

A good bug report shouldn't leave others needing to reach you for more information. Please try to be as detailed as possible as all details listed will help us to fix the found issues.

Сreate issue: [`reporting a bug`](../../issues/new?template=Bug_report.md)

### Request a feature

We welcome feature requests, but take some time to ensure that your idea fits with the scope and aims of our project. Please provide as much detail and context as possible.

Create issue: [`request a feature`](../../issues/new?template=Feature_request.md)

### Other questions

You can send you questions in [@linterhub/maintens](../../../teams/maintainers) or create an issue: [`custom issue`](../../issues/new?template=Custom.md)

## Pull Request

Good pull requests - patches, improvements, new features - are a great help. They should remain focused in scope but please avoid unrelated commits.

Please reach us before submitting any significant pull request (e.g. implementing features, refactoring code), otherwise, you risk spending a lot of time working on something that is not likely to be merged into the project.

Please adhere to the coding conventions used throughout a project (indentation, accurate comments, etc.) and any other requirements (such as test coverage).

### Preparation

Follow this process if you want your work to be included in our project:

#### STEP 1: Install

Installation steps are described in [README.md](./README.md#install)

#### STEP 2: Get the latest changes

If you cloned a while ago, get the latest changes from upstream:

```bash
git checkout dev
git pull upstream dev
```
#### STEP 3: Create a new branch

Сreate a new branch in your fork:

```bash
git checkout -b issue1234
```

Where: `issue1234` - is a issue what it is you are fixing

> Note: Do not combine fixes for multiple issues into one branch

#### STEP 4: Make your changes

Make the changes to the code and tests, following the code conventions. Once you finished, commit the changes to your branch:

```bush
git add -A
git commit
```

Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit-message).

#### STEP 5: Run the tests

After rebasing, be sure to run all of the tests once again to make sure nothing's been affected:

```bush
gulp test
```

If there are any failing tests, update your code until all tests pass.

#### STEP 6: Rebase onto upstream

Before you send the pull request, be sure to rebase onto the upstream source to ensure your code is running on the latest available code.

```bush
git fetch upstream
git rebase upstream/master
```

#### STEP 7: Double check your submission

With your code ready to go, please double-check your submission to make sure it follows our conventions. Here are the things to check:

Make sure your commit has the right format:

- A oull request must contain a description explaining what you did and how the effects can be seen.
- The commit message is [properly formatted](#commit-message).
- The change causes no functional regression. Be sure to run a test to verify your changes before submitting a pull request.
- All changes must be accompanied by tests, even if the feature you’re working on previously had no tests.
- All user-facing changes must be accompanied by the correspndent documentation.

#### STEP 8: Push your changes

Next, push your changes to your clone:

```bush
git push
```

#### STEP 9: Send the pull request

Now you’re ready to send the pull request. Go to your fork and then follow the [GitHub documentation](https://help.github.com/articles/creating-a-pull-request/) on how to send a pull request.

### Commit message

The commit message format is important as these messages are used to create a changelog for each release. The issue number helps to create more consistent and useful changelogs.

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a type and a subject:

```text
<type>:<subject> (<number of issue>)
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type

Must be one of the following:

| name         | description |
| :-:          | -       |
| docs         | Documentation only changes |
| feat         | A new feature, alias `new` |
| fix          | A bug fix |
| perf         | A code change that improves performance |
| refactor     | A code change that neither fixes a bug or adds a feature |
| style        | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| test         | Adding missing tests or correcting existing tests |
| breaking     | For a backwards-incompatible enhancement or feature.|

### Subject

The subject contains the exact description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- no dot use (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the full description of the change.

### Footer

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if there's any.

### Exmaple

```text
Test: Add missing tests for a linter (#456)

Adding missing tests for the linter:
- with full data
- incorrect collection of languages

Closes #456
```