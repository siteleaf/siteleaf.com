---
title: Introducing remote themes
date: 2017-11-30 13:00:00 -05:00
tags:
- jekyll
- github
---

Some exciting news! GitHub Pages [has announced](https://github.com/blog/2464-use-any-theme-with-github-pages) support for loading remote themes from any GitHub-hosted repository. This is also supported on Siteleaf as of today, whether you publish to GitHub or anywhere else.

Remote themes are similar to [Gem-based themes](https://learn.siteleaf.com/themes/gem-based-themes/), but do not require `Gemfile` changes or whitelisting. This means you can now use any of the hundreds of community-curated themes available on GitHub.com, or create your own without having to publish a Gem.

Jekyll themes package layouts, includes, and stylesheets in a way that can be overridden by your site’s content. It’s a great way to maintain a separation of content and code, and makes it possible to share themes across multiple sites.




To build your site with any public, GitHub-hosted theme, add the following to your site's `_config.yml` file (or Site Settings in Siteleaf):

```yaml
remote_theme: owner/name
```

Replacing owner and name with the repository owner's username and repository name. 

You may also optionally specify a branch, tag, or commit to use by appending an `@` and the Git ref (e.g., `owner/name@v1.0.0` or `owner/name@develop`). If you don't specify a Git ref, the `master` branch will be used.

Your theme repository must be public and hosted on GitHub.com. As always, your site repository can remain private.
{: .warning}

This is made possible behind the scenes through the new [`jekyll-remote-theme`](https://github.com/benbalter/jekyll-remote-theme) plugin which is now included by default in GitHub Pages and Siteleaf. If you are using a custom `Gemfile`, make sure to include this or `github-pages` (version 172 or higher).

If you're interested in making your Jekyll theme, check [out our tutorial](/blog/making-your-first-jekyll-theme-part-1/) and [help docs](https://learn.siteleaf.com/themes/gem-based-themes/).

---

Also special shout out to Jekyll which recently turned 9 years old. Thanks to Tom Preston-Werner and [all 732 contributors](https://github.com/jekyll/jekyll/graphs/contributors) who make it possible for Jekyll to power millions of websites around the world today. Happy birthday! 🎉