---
title: Authors and tags
date: 2016-10-18 00:00:00 -04:00
tags:
- tutorial
- jekyll
description: In this tutorial, we'll show you how to set up your Jekyll blog with
  authors and tags, as well as how to leverage Siteleaf to maintain your content.
button:
  title: See more tutorials
  url: "/blog/tags/tutorial"
---

At Oak, we recently launched a new website for our friends at [Collaborative Fund](http://www.collaborativefund.com/), built on Siteleaf. The site features a [blog](http://www.collaborativefund.com/blog/) for their prolific content, including [author](http://www.collaborativefund.com/blog/authors/morgan/) and [tag](http://www.collaborativefund.com/blog/tags/featured/) pages.

In this tutorial, we'll show you how to set up your Jekyll blog with authors and tags, as well as how to leverage Siteleaf to maintain your content.


## Authors

Jekyll [collections](https://jekyllrb.com/docs/collections/) are a powerful way to organize and manage content on your site. Collections allow you to define documents with their own properties and namespace, making them flexible enough to create rich author pages.

### Create an author collection

In your site, create a collection called `authors` and add documents representing each blog author. You can do so in Siteleaf or in code. Here's an example of that file structure:

```
_authors/
  morgan-housel.markdown
  craig-shapiro.markdown
  pharrell-williams.markdown
```

![](/uploads/author-collection.png)

In `_config.yml`, set the [`output`](https://jekyllrb.com/docs/collections/#step-3-optionally-render-your-collections-documents-into-independent-files) to `true` so that Jekyll will generate a page for each author:

```
collections:
  authors:
    title: Authors
    output: true
```

If creating this collection in the Siteleaf UI, `output` is set to `true` by default.
{: .tip}

Next, we fill out each author document. You can define the fields however you like. In the case of Collaborative Fund, we have `title` (for the author's name), `permalink`, `twitter` handle, and Markdown content representing the bio.

Here is an example, `craig-shapiro.markdown`:

```markdown
---
title: Craig Shapiro
permalink: "/blog/authors/craig/"
twitter: cshapiro
---

Craig Shapiro is a founder and managing partner of Collaborative Fund.
```

### Set up your templates

In your post template, you can display the post's author and link to the author page.

{% raw %}
```liquid
{% assign author = site.authors | where: 'title', post.author | first %}
{% if author %}
  <a href="{{ author.permalink }}">{{ author.title }}</a>
{% endif %}
```
{% endraw %}

Then in the author page template, you can list the posts by that author as well as show other fields you've defined, such as their bio (`page.content`) and Twitter handle.

{% raw %}
```liquid
<h1>{{ page.title }}</h1>
<section>
  {{ page.content }}
  @<a href="https://twitter.com/{{ page.twitter }}">{{ page.twitter }}</a>
</section>

{% assign posts = site.posts | where: 'author', page.title %}
{% for post in posts %}
  {% include post.html %}
{% endfor %}

```
{% endraw %}

### Configure with Siteleaf

We can make it easy for content managers to specify the author for new posts in the Siteleaf UI with an autocomplete dropdown. To do so, we take advantage of [associated](https://learn.siteleaf.com/content/metadata/#collection-fields) metadata fields in Siteleaf.

Just name your field the singular `author` to your plural collection `authors`. So, a post's metadata will look something like:

```yml
---
title: My Blog Post
date: 2010-01-19 13:24:00
tags:
- Announcements
author: Craig Shapiro
---
```

Finally, in `_config.yml`, set up `author` as a default field for each post. You can also enter a default author name if you want, for example `author: Collaborative Team`.

```yml
defaults:
- scope:
    path: ''
    type: posts
  values:
    permalink: "/blog/:title/"
    layout: post
    author: 
```

This tells Siteleaf to populate each new post with that metadata field automatically. Here's how it looks in Siteleaf:

![](/uploads/author-select.gif)


## Tags

To create tag pages, you can create a collection of `blog_tags` in the same way we did for `authors`. The Siteleaf blog [uses](https://github.com/siteleaf/siteleaf.com/tree/master/_blog_tags) this approach, for example.

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

Then in the tag page template (`tag_page_layout`), you can list the posts with that tag.

{% raw %}
```liquid
<h1>Tagged {{ page.tag }}</h1>

{% assign posts = site.tags[page.tag] %}
{% for post in posts %}
  {% include post.html %}
{% endfor %}
```
{% endraw %}

