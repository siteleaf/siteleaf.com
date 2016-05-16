Siteleaf template for `v2.siteleaf.com`, built on Siteleaf v2, which will eventually become the new `siteleaf.com`.

## Local development

Compile and watch for changes to JavaScript in `_src`:

```
grunt dev
```

Start the server and watch for changes:

```
jekyll serve
```


## Publishing

Compile and minify JavaScript:

```
grunt
```

Generate static site to `_site`:

```
jekyll build
```

With GitHub sync enabled, push to GitHub. Then publish on Siteleaf.
