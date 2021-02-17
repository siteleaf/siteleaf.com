<img alt="Siteleaf" src="https://learn.siteleaf.com/assets/images/logo.svg" width="10%">

## Prerequisites

1. Install Ruby and RubyGems: https://jekyllrb.com/docs/installation/

2. Install Node and NPM: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Local development

Install gems:

```
bundle install
```

Install node packages:

```
npm install
```

Compile and watch for changes to JavaScript:

```
grunt dev
```

Start the server and watch for changes:

```
bundle exec jekyll serve
```

Open http://localhost:4000 in a web browser to preview the site.


## Publishing

Compile and minify JavaScript:

```
grunt
```

With GitHub sync enabled, push to GitHub. Then publish on Siteleaf.
