---
title: How to check your site for broken links
date: 2019-04-09 11:00:00 -04:00
tags:
- jekyll
- tip
image: "/uploads/jekyll-tip-2.png"
description: 'Clicking on links that are broken is a bad experience for users, and
  it can even affect your [SEO](https://www.siteleaf.com/blog/seo-with-jekyll-siteleaf/).
  Thankfully, it’s really easy to automate the process of checking the links on your
  site using `html-proofer`. '
---

Clicking on links that are broken is a bad experience for users, and it can even affect your [SEO](https://www.siteleaf.com/blog/seo-with-jekyll-siteleaf/). Thankfully, it’s really easy to automate the process of checking the links on your site using `html-proofer`. 

You can install `html-proofer` however you like, for the sake of argument we’ll use `bundle` by adding the following to your `gemfile`:

```sh
gem 'rake'
gem 'html-proofer'
```

And then run `bundle install`. Then you can get `html-proofer` to check for any broken links using the following commands:

```sh
bundle exec jekyll build
bundle exec htmlproofer ./_site`
```

Then you’ll receive a breakdown of every external and internal link which is broken. Go forth and fix things! Hat's off to [Super Tech Crew](https://www.supertechcrew.com/jekyll-check-for-broken-links/) for this tip. 