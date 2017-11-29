---
title: GitHub Pages now supports remote themes
date: 2017-11-29 17:42:00 -05:00
tags:
- github
- jekyll
---

GitHub Pages [announced today](https://github.com/blog/2464-use-any-theme-with-github-pages) support for loading remote themes from any repository.

You can now use any of the hundreds of community-curated themes free on GitHub.com, without worrying about whitelisting or `Gemfile` changes.

To build your site with any public, GitHub-hosted theme, add the following to your site's `_config.yml` file (or Site Settings in Siteleaf's UI):

```yaml
remote_theme: owner/name
```

Replacing owner and name with the repository's owner and repository name. 

You may also optionally specify a branch, tag, or commit to use by appending an `@` and the Git ref (e.g., `benbalter/retlab@v1.0.0` or `benbalter/retlab@develop`). If you don't specify a Git ref, the `master` branch will be used.

{: .warning} Your theme repository must be public and hosted on GitHub (your site repository can remain private).

If you're interested in making your Jekyll theme, check [out our tutorial](/blog/making-your-first-jekyll-theme-part-1/) and [help docs](https://learn.siteleaf.com/themes/gem-based-themes/).

---

Also special shout out to Jekyll which recently turned 9 years old. Thanks to Tom Preston-Werner and [all 732 contributors](https://github.com/jekyll/jekyll/graphs/contributors) who make it possible for Jekyll to power millions of websites around the world today.