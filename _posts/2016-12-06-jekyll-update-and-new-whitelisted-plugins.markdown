---
title: Jekyll update & new whitelisted plugins
date: 2016-12-06 14:25:00 -05:00
tags:
- announcement
- jekyll
- github
---

We have updated our default Jekyll version from 3.3.0 to 3.3.1, to match the [recent update at GitHub Pages](https://github.com/blog/2290-relative-links-for-github-pages).

This update includes a few minor enhancements and bug fixes. For a full list of revisions [check out the release notes](https://jekyllrb.com/docs/history/#v3-3-1).

Also included in this update are two new [whitelisted plugins](https://learn.siteleaf.com/themes/jekyll-plugins/).



#### 1. jekyll-avatar

[Jekyll Avatar](https://github.com/benbalter/jekyll-avatar) makes it easy to add GitHub avatars to your site by specifying a username. Avatars are cached by GitHub, load in parallel, and use retina images when supported.

Simply add the following, anywhere you'd like a user's avatar to appear:

{% raw %}
```
{% avatar USERNAME %}
```
{% endraw %}

You can also customize the size:

{% raw %}
```
{% avatar siteleaf size=50 %}
```
{% endraw %}

This would render as:

```html
<img class="avatar" src="https://avatars3.githubusercontent.com/siteleaf?v=3&amp;s=50" alt="siteleaf" srcset="https://avatars3.githubusercontent.com/siteleaf?v=3&amp;s=50 1x, https://avatars3.githubusercontent.com/siteleaf?v=3&amp;s=100 2x, https://avatars3.githubusercontent.com/siteleaf?v=3&amp;s=150 3x, https://avatars3.githubusercontent.com/siteleaf?v=3&amp;s=200 4x" width="50" height="50" />
```

For details see: <https://github.com/benbalter/jekyll-avatar>


#### 2. jekyll-relative-links

[Jekyll Relative Links](https://github.com/benbalter/jekyll-relative-links) convert relative markdown links to their rendered equivalents.

For example, if you link to a Markdown file called `bar.md`:

```
[foo](bar.md)
```

This plugin converts your link to the rendered permalink version:

```html
<a href="/bar.html">foo</a>
```

For details see: <https://github.com/benbalter/jekyll-relative-links>

---

For most sites, no action is required to take advantage of the latest version. If you wish to use a specific version of Jekyll for your site, you can define that in your `Gemfile`.

As a reminder, sites on our Team and higher plans can also use custom (non-whitelisted) gems. See [learn.siteleaf.com](https://learn.siteleaf.com/themes/jekyll-plugins/) for all the details.