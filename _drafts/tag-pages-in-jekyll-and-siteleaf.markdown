---
title: Tag pages in Jekyll and Siteleaf
date: 2016-10-20 14:22:00 -04:00
tags:
- tutorial
- jekyll
description: In this tutorial, we show you some approaches for working with tags in
  Jekyll and Siteleaf.
image: 
button:
  title: See more tutorials
  url: "/blog/tags/tutorial"
---

In this tutorial, we show you some approaches for working with tags in Jekyll and Siteleaf.


This is part two of a tutorial series on Jekyll and Siteleaf. Be sure to check out part one on [author pages](/blog/author-pages-in-jekyll-and-siteleaf/).
{: .note}

## Collection approach

One way to add tag pages to your Jekyll blog is to create a [collection](https://jekyllrb.com/docs/collections/) of tags, in the same way we did for authors in the [author page](/blog/author-pages-in-jekyll-and-siteleaf/) tutorial. Each document in the collection would represent a different tag.

The Siteleaf blog uses this approach, for example. This lets us [give](/blog/tags/tutorial/) [fun](/blog/tags/jekyll/) [colors](/blog/tags/announcement/) to each tag page by setting up a `color` field for each tag document.

Explore the Siteleaf blog [source code](https://github.com/siteleaf/siteleaf.com/tree/master/_blog_tags) or read more about this approach in the [author page](/blog/author-pages-in-jekyll-and-siteleaf/) tutorial.

## Plugin approach

If you plan to use more than a dozen or so tags, a plugin can save you from having to create individual documents for each. This approach lets authors and content managers easily create new tags on the fly and have autocomplete available in the Siteleaf UI.

![](/uploads/tags-select.gif)

Third-party and custom plugins are available starting on the Team plan.
{: .note}

There are a number of plugins available for tags. TO DO: list them. Here, we show you how to set up tag pages on your Jekyll blog using the [`jekyll-tagging`](https://github.com/pattex/jekyll-tagging) plugin, which we use on the Collaborative Fund website.

### Install the plugin

In your `Gemfile`, include `'jekyll-tagging'`:

```
source 'https://rubygems.org'
gem 'jekyll'
group :jekyll_plugins do
  gem 'jekyll-tagging'
end
```

Then in `_config.yml`, include the plugin in the list of gems:

```
gems:
- jekyll/tagging
```

Due to the directory layout for this plugin, we include it as `jekyll/tagging` rather than the standard `jekyll-tagging`.
{: .note}

For more, check out our docs on using [plugins](https://learn.siteleaf.com/themes/jekyll-plugins/).

### Set up your templates

The [`jekyll-tagging`](https://github.com/pattex/jekyll-tagging) plugin automatically generates pages for each unique tag across all your posts. You can specify the layout template these tag pages use and the directory into which these pages are generated in your `_config.yml`.

```
tag_page_layout: tag
tag_page_dir: blog/tags
```

All you need to do, then, is set up your templates to expose these tag pages.

In the [post](http://www.collaborativefund.com/blog/the-villain-test/) template, you can list the post's tags and link to their corresponding tag pages.

{% raw %}
```liquid
<ul>
  {% for tag in page.tags %}
    <li>
      <a href="/{{ site.tag_page_dir }}/{{ tag | slugify: 'pretty' }}/">{{ tag }}</a>
    </li>
  {% endfor %}
</ul>
```
{% endraw %}

Then in the [tag page](http://www.collaborativefund.com/blog/tags/investment-thesis/) template, you can list the posts with that tag.

{% raw %}
```liquid
<h1>Tagged {{ page.tag }}</h1>

{% assign posts = site.tags[page.tag] %}
{% for post in posts %}
  {% include post.html %}
{% endfor %}
```
{% endraw %}


Finally, you can list all tags for your site in an [index page](http://www.collaborativefund.com/blog/tags/).

{% raw %}
```liquid
<ul>
  {% for tag in site.tags %}
  {% assign t = tag | first %}
    <li><a href="/{{ site.tag_page_dir }}/{{ t | slugify: 'pretty' }}/">{{ t }}</a></li>
  {% endfor %}
</ul>
```
{% endraw %}

You can [sort your tags](https://gist.github.com/sskylar/8956549d1ae9dc91c89e74b1c5a0d8c9) by popularity (number of posts), too.
{: .tip}

## Recap

You now know how to:

- do this
- do that
- TO DO

