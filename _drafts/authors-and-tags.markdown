---
title: Authors and tags
date: 2016-10-18 00:00:00 -04:00
tags:
- tutorial
- jekyll
image: 
description: In this tutorial, we'll show you how to set up your Jekyll blog with
  authors and tags, as well as how to leverage Siteleaf to maintain your content.
button:
  title: See more tutorials
  url: "/blog/tags/tutorial"
---

At Oak, we recently launched a new website for our friends at [Collaborative Fund](http://www.collaborativefund.com/), built on Siteleaf v2. The site features a [blog](http://www.collaborativefund.com/blog/) for their prolific content, including [author](http://www.collaborativefund.com/blog/authors/morgan/) and [tag](http://www.collaborativefund.com/blog/tags/featured/) pages.

In this tutorial, we'll show you how to set up your Jekyll blog with authors and tags, as well as how to leverage Siteleaf to maintain your content.


## Authors

While Jekyll doesn't support authors out-of-the-box, its [collections](https://jekyllrb.com/docs/collections/) are flexible enough to create this functionality for yourself.

### Create an author collection

In your site, create a collection called `authors`, with documents representing each blog author. Set the [output](https://jekyllrb.com/docs/collections/#step-3-optionally-render-your-collections-documents-into-independent-files) to `true` in `_config.yml` to generate a page for each author.

Here is what your file structure should look like:

```
_authors/
  morgan-housel.markdown
  craig-shapiro.markdown
  pharrell-williams.markdown
```

You can set up each author document however you like. In the case of Collaborative Fund, we have the fields `title`, `permalink`, `twitter` handle, and Markdown content representing the bio.

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

In your post template, you can include the post's author and link.

{% raw %}
```liquid
{% for site_author in site.authors %}
  {% if site_author.title == post.author %}
    <a href="{{ site_author.permalink }}">{{ site_author.title }}</a>
  {% endif %}
{% endfor %}
```
{% endraw %}

In the author page template, you can list the posts by that author.

{% raw %}
```liquid
<h1>Posts by {{ page.title }}</h1>

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

In `_config.yml`, set up `author` as a default field for each post:

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


## Tags

While we can certainly create a collection of `blog_tags` to create tag functionality in the same way we did for `authors` (in fact, the Siteleaf blog [uses](https://github.com/siteleaf/siteleaf.com/tree/master/_blog_tags) this approach), we can also use third-party or custom plugins now that they're [supported](/blog/plugins-and-themes-are-here/) by Siteleaf.

Plugins can automatically generate a page for each unique tag, for example. This lets authors and content managers create new tags on the fly (without having to create a new document for each new tag), while still having autocomplete available in the Siteleaf UI.

The rest of this tutorial will show you how to set up tags using the [`jekyll-tagging`](https://github.com/pattex/jekyll-tagging) plugin, used on Collaborative Fund's website.

Third-party and custom plugins are available starting on the Team plan.
{: .note}

### Set up your templates

Since the `jekyll-tagging` plugin automatically generates tag pages with a specified layout in a specified directory, all you need to do is set up your templates to expose these tag pages.

In the post template, list the post's tags and link to their corresponding pages.

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

Then in the author page template, you can list the posts with that tag.

{% raw %}
```liquid
<h1>Tagged {{ page.tag }}</h1>

{% assign posts = site.tags[page.tag] %}
{% for post in posts %}
  {% include post.html %}
{% endfor %}
```
{% endraw %}

### Install the plugin

In `_config.yml`, simply include the plugin in the list of gems:

```
gems:
- jekyll/tagging
```

Due to the directory layout for this plugin, we include it as `jekyll/tagging` rather than the standard `jekyll-tagging`.
{: .note}

For more, check out our docs on using [plugins](https://learn.siteleaf.com/themes/jekyll-plugins/).
