---
title: Creating tag pages with Jekyll and Siteleaf
date: 2016-10-21 12:13:00 -04:00
tags:
- tutorial
- jekyll
description: In this tutorial, we show you approaches for creating tag pages in Jekyll
  and Siteleaf.
button:
  title: See more tutorials
  url: "/blog/tags/tutorial"
---

In this tutorial, we show you approaches for creating tag pages in Jekyll and Siteleaf.

This is part two of a tutorial series on Jekyll and Siteleaf. Check out part one on [author pages](/blog/author-pages-in-jekyll-and-siteleaf/).
{: .note}

## The plugin approach

If you plan to use more than a dozen or so tags, a [plugin](https://jekyllrb.com/docs/plugins/) can save you from having to create individual documents for each. This approach lets authors and content managers easily create new tags on the fly, while having autocomplete available in the Siteleaf UI.

![](/uploads/tags-select.gif)


For this tutorial, we demonstrate how to set up tag pages on your Jekyll `_posts` using the [jekyll-tagging](https://github.com/pattex/jekyll-tagging) plugin, which we at Oak used when building the [Collaborative Fund blog](http://www.collaborativefund.com/blog/).

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

Then in `_config.yml`, include `jekyll/tagging` in the list of gems:

```
gems:
- jekyll/tagging
```

Due to the directory layout for this plugin, we include it as `jekyll/tagging` rather than the standard `jekyll-tagging`.
{: .note}

For more, read our full documentation on using [plugins](https://learn.siteleaf.com/themes/jekyll-plugins/).

### Set up your templates

The [jekyll-tagging](https://github.com/pattex/jekyll-tagging) plugin automatically generates pages for each unique tag across all your posts. You can specify the layout template these tag pages use and the directory into which they're generated in your `_config.yml`.

```
tag_page_layout: tag
tag_page_dir: blog/tags
```

All you need to do, then, is set up your templates to expose these tag pages.

In the [post](http://www.collaborativefund.com/blog/the-villain-test/) template, you can list the post's tags and link to their corresponding pages by constructing the URL based off the `tag_page_dir` you've configured.

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

Then in the [tag page](http://www.collaborativefund.com/blog/tags/investment-thesis/) template, you can list all the posts with that tag by looping through Jekyll's built-in variable `site.tags`, filtered by that tag.

{% raw %}
```liquid
<h1>Tagged {{ page.tag }}</h1>

{% assign posts = site.tags[page.tag] %}
{% for post in posts %}
  {% include post.html %}
{% endfor %}
```
{% endraw %}


Finally, you can list all the tags for your site in an [index page](http://www.collaborativefund.com/blog/tags/).

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

You can even [sort your tags](https://gist.github.com/sskylar/8956549d1ae9dc91c89e74b1c5a0d8c9) by popularity (number of posts).
{: .tip}

## The collection approach

A simple, plugin-less way to add tag pages to your Jekyll blog is to create a tags [collection](https://jekyllrb.com/docs/collections/), in the same way we did for authors in the [previous tutorial](/blog/author-pages-in-jekyll-and-siteleaf/). Jekyll can then generate a page for each tag document in your collection.

The Siteleaf blog [uses](https://github.com/siteleaf/siteleaf.com/tree/master/_blog_tags) this approach, for example. This even gives us the flexibility to [add](/blog/tags/tutorial/) [fun](/blog/tags/jekyll/) [colors](/blog/tags/announcement/) to each tag page by setting up a `color` metadata field for each tag document.

Since this approach doesn't require a plugin, your site can be readily published to GitHub Pages on Siteleaf's free Developer plan.
{: .tip}

To avoid confusion with the `site.tags` [Jekyll variable](https://jekyllrb.com/docs/variables/#site-variables), name the collection something like `blog_tags` so you can reference it with `site.blog_tags`.
{: .warning}

For more on this collection approach, read the tutorial on [author pages](/blog/author-pages-in-jekyll-and-siteleaf/) or explore the Siteleaf blog [source code](https://github.com/siteleaf/siteleaf.com/tree/master/_blog_tags).

## Recap

Way to go! You now know two ways to add tag pages to your Jekyll blog:

- The first approach utilizes a plugin to automatically generate pages for each of your tags. Content managers can then easily add new tags or existing tags in the Siteleaf UI.
- The second approach uses collections to output a page for each tag document.

## Further reading

- [Jekyll: Plugins](https://jekyllrb.com/docs/plugins/)
- [Siteleaf: Plugins](https://learn.siteleaf.com/themes/jekyll-plugins/)
- [Jekyll: Collections](https://jekyllrb.com/docs/collections/)
