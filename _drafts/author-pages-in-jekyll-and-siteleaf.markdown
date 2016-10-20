---
title: Author pages in Jekyll and Siteleaf
date: 2016-10-18 00:00:00 -04:00
tags:
- tutorial
- jekyll
description: In this tutorial, we'll show you how to set up your Jekyll blog with author pages and then leverage Siteleaf to maintain your content.
image: 
button:
  title: See more tutorials
  url: "/blog/tags/tutorial"
---

At Oak, we recently launched a new website for our friends at [Collaborative Fund](http://www.collaborativefund.com/), built on Siteleaf. The site features a [blog](http://www.collaborativefund.com/blog/) for their prolific content, including [author](http://www.collaborativefund.com/blog/authors/morgan/) and [tag](http://www.collaborativefund.com/blog/tags/featured/) pages.

In this tutorial, we'll show you how to set up your Jekyll blog with author pages and then leverage Siteleaf to maintain your content.


## Create an author collection

Jekyll [collections](https://jekyllrb.com/docs/collections/) are a powerful way to organize and manage content on your site. Collections allow you to define documents with their own properties and namespace, making them flexible enough to create rich author pages.

To get started, create a collection called `authors` and add documents representing each blog author. You can do this in Siteleaf or manually in your source files.

![](/uploads/author-collection.png)

Here's an example of the file structure:

```
_authors/
  morgan-housel.markdown
  craig-shapiro.markdown
  pharrell-williams.markdown
```

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

Here's an example, `craig-shapiro.markdown`:

```markdown
---
title: Craig Shapiro
permalink: "/blog/authors/craig/"
twitter: cshapiro
---

Craig Shapiro is a founder and managing partner of Collaborative Fund.
```

## Set up your templates

In your post template, you can display the post's author and link to the author page.

{% raw %}
```liquid
{% assign author = site.authors | where: 'title', post.author | first %}
{% if author %}
  <a href="{{ author.permalink }}">{{ author.title }}</a>
{% endif %}
```
{% endraw %}

Then in the author page template, you can list the posts by that author as well as show other fields you've defined, such as their bio (`page.content`).

{% raw %}
```liquid
<h1 class="name">{{ page.title }}</h1>
<div class="bio">{{ page.content }}</div>

{% assign posts = site.posts | where: 'author', page.title %}
{% for post in posts %}
  {% include post.html %}
{% endfor %}

```
{% endraw %}

Finally, you can list all authors for your site in an [index page](http://www.collaborativefund.com/blog/authors/).

{% raw %}
```liquid
<ul>
  {% for author in site.authors %}
    <li><a href="{{ author.permalink }}">{{ author.title }}</a></li>
  {% endfor %}
</ul>
```
{% endraw %}

## Configure with Siteleaf

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

In `_config.yml`, set up `author` as a default field for each post. You can also enter a default author name if you want, for example `author: Collaborative Team`.

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

That's it! You now know how to create a collection of authors, set up your templates to display authors and link to their pages, and configure Siteleaf to easily add an author to a post.

## Next steps

Stay tuned for the next tutorial in this series, where we'll show you some approaches for working with tags in Jekyll and Siteleaf.
