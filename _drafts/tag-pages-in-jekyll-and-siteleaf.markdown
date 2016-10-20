---
title: Tag pages in Jekyll and Siteleaf
date: 2016-10-18 00:00:00 -04:00
tags:
- tutorial
- jekyll
description: In this tutorial, we show you a couple approaches for how to set up your
  Jekyll blog with tag pages.
image: 
button:
  title: See more tutorials
  url: "/blog/tags/tutorial"
---

In this tutorial, we show you a couple approaches for how to set up your Jekyll blog with tag pages.


This is the second part a tutorial series. Check out the first part on [author pages](/blog/author-pages-in-jekyll-and-siteleaf/).
{: .tip}

## Approach 1: Collections

To create tag pages, you could create a [collection](https://jekyllrb.com/docs/collections/) of tags, in the same way we did for authors in the [first part of this tutorial series](/blog/author-pages-in-jekyll-and-siteleaf/). The Siteleaf blog [uses](https://github.com/siteleaf/siteleaf.com/tree/master/_blog_tags) this approach, for example. Each document within the collection represents a different tag.

You can create your collection in Siteleaf or manually in your source files.

### Creating in Siteleaf

To create your collection in Siteleaf, simply click **New collection** in the sidebar of the Siteleaf UI. Name your collection "Tags".

Under your collection settings, 
![](/uploads/tag-collection.png)

Using the name `blog_tags` lets us reference our collection as `site.blog_tags`. This avoids confusion with the built-in Jekyll site variable `site.tags`.
{: .note}

### Creating manually

```
collections:
  gallery:
    title: Gallery
    output: false
  posts:
    title: Posts
    output: true
  blog_tags:
    title: Tags
    output: true
```

If creating in Siteleaf, 

The file structure of your source files looks like this:

```
_blog_tags/
  my-tag-1.markdown
  announcement.markdown
  third-tag.markdown
```

## Approach 2: Plugins

However, if you plan to use more than a dozen or so tags, a plugin can save you from having to create individual documents for each. This approach lets authors and content managers easily create new tags on the fly.

![](/uploads/tags-select.gif)

The rest of this tutorial will show you how to set up tags using the [`jekyll-tagging`](https://github.com/pattex/jekyll-tagging) plugin, used on Collaborative Fund's website.

Third-party and custom plugins are available starting on the Team plan.
{: .note}

### Install the plugin

In your `Gemfile`, include `'jekyll-tagging'`:

```
source 'https://rubygems.org'
gem 'jekyll'
group :jekyll_plugins do
  gem 'jekyll-tagging'
end
```

In `_config.yml`, include the plugin in the list of gems:

```
gems:
- jekyll/tagging
```

Due to the directory layout for this plugin, we include it as `jekyll/tagging` rather than the standard `jekyll-tagging`.
{: .note}

For more, check out our docs on using [plugins](https://learn.siteleaf.com/themes/jekyll-plugins/).

### Set up your templates

Since the [`jekyll-tagging`](https://github.com/pattex/jekyll-tagging) plugin automatically generates pages for each unique tag (with a specified layout in a specified directory, `tag_page_dir`), all you need to do is set up your templates to expose these tag pages.

In the post template, you can list the post's tags and link to their corresponding tag pages.

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

Then in the tag page template, you can list the posts with that tag.

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
