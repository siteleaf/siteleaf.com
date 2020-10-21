<img alt="Siteleaf" src="https://learn.siteleaf.com/assets/images/logo.svg" width="10%">

## Local development

Install gems:

```
bundle install
```

Install node packages:

```
npm install
```

Compile and watch for changes to JavaScript in `_src`:

```
grunt dev
```

Start the server and watch for changes:

```
bundle exec jekyll serve
```


## Publishing

Compile and minify JavaScript:

```
grunt
```

With GitHub sync enabled, push to GitHub. Then publish on Siteleaf.
