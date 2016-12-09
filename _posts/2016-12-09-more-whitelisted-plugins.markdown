---
title: More whitelisted plugins
date: 2016-12-09 16:42:00 -05:00
tags:
- announcement
- jekyll
- github
---

Hot on the heels of the [Jekyll 3.3.1 update earlier this week](/blog/jekyll-update-and-new-whitelisted-plugins/), four additional plugins have been [whitelisted for GitHub Pages](https://github.com/blog/2289-publishing-with-github-pages-now-as-easy-as-1-2-3). 

These plugins are specifically geared toward software documentation and open source code projects on GitHub, but may come in handy for any type of website.



Here they are:

#### 1. jekyll-default-layout

[Jekyll Default Layout](https://github.com/benbalter/jekyll-default-layout) will automatically set default layouts for your Jekyll pages and documents. If no layout is specified, the plugin looks for layouts called `home`, `post`, `page`, or `default` and automatically sets it for your homepage, posts, pages, and documents respectively.

For details see: <https://github.com/benbalter/jekyll-default-layout>

#### 2. jekyll-titles-from-headings

[Jekyll Title from Headings](https://github.com/benbalter/jekyll-titles-from-headings) is a plugin that automatically grabs the page title from the first `H1`, `H2`, or `H3` in your Markdown documents. 

This page title can then be used by Jekyll and other plugins including [Jekyll SEO Tag](https://github.com/benbalter/jekyll-seo-tag).

For details see: <https://github.com/benbalter/jekyll-titles-from-headings>

#### 3. jekyll-optional-front-matter

[Jekyll Optional Front Matter](https://github.com/benbalter/jekyll-optional-front-matter) is a plugin which makes YAML front matter optional for Markdown files.

Keep in mind the Siteleaf UI will only surface Markdown pages and documents with YAML front matter, so this could be a way to have hidden (non-editable) pages that publish along with your site. 

For details see: <https://github.com/benbalter/jekyll-optional-front-matter>

#### 4. jekyll-readme-index

[Jekyll Readme Index](https://github.com/benbalter/jekyll-readme-index) is a handy plugin specifically useful for GitHub-centric projects. If you have a `README.md` file in your repo, and your site doesn't otherwise have an index file, this plugin instructs Jekyll to use the readme as the site's index.

For details see: <https://github.com/benbalter/jekyll-readme-index>

---

These plugins are enabled by default when your site is compiled by GitHub, or if no `Gemfile` is specified. To disable default plugins, create a `Gemfile` and specify only the desired plugins.

In addition to whitelisted plugins, sites on our Team and higher plans can use third-party plugins. 

See [learn.siteleaf.com](https://learn.siteleaf.com/themes/jekyll-plugins/) for a full list of whitelisted plugins, and how to use a `Gemfile`.