---
title: 'Advanced Liquid: Where'
date: 2015-04-08 15:25:00 -04:00
tags:
- tutorial
- liquid
- v1
hero: "/uploads/where.svg"
Docs:
- filters and tags
- where
---

Now that you are [sorting](/blog/advanced-liquid-sort/) like a pro, we’ll move on to another new and exciting Liquid filter: `where`. 

Where allows us to find content based on a parameter. If you are coming from Jekyll, you’ll be happy to know it follows the same syntax.

For example, here’s how we could find all pages titled “Foo”:

```liquid
{% raw %}{% assign foo_pages = site.pages | where:"title","Foo" %}{% endraw %}
```

As with `sort`, you can use [any property](http://v1.siteleaf.com/help/themes/variables/content/) like date, title, slug, even metadata and taxonomy. Below are few real-world examples you might find useful.


### Show posts by author

So I just created a fancy new bio page for myself, and now I want to display posts I’ve written alongside my bio. 

![fancy bio page](/uploads/fancy-bio.png) 

To locate posts written by a specific author across the entire site, we can start with `site.posts`. Then we can apply the `where` filter with `author` as a parameter:

```liquid
{% raw %}{% assign my_posts = site.posts | where:"author","Skylar Challand" %}{% endraw %}
```

You can also use nested properties such as `author.email`:

```liquid
{% raw %}{% assign my_posts = site.posts | where:"author.email","skylar@siteleaf.com" %}{% endraw %}
```

Now we can display our matching posts using the `my_posts` variable we just created:

```liquid
{% raw %}<ul>
  {% for post in my_posts %}
  <li><a href="{{post.url}}">{{post.title}}</a></li>
  {% endfor %}
</ul>{% endraw %}
```

**Don't repeat yourself:** Since the title on my bio page matches the author name (“Skylar Challand”), we could use `title` as a variable and make our theme code reusable:

```liquid
{% raw %}{% assign my_posts = site.posts | where:"author",title %}{% endraw %}
```

### Show featured posts

In the [previous tutorial](/blog/advanced-liquid-sort/) we showed you how to use [metadata](/blog/metadata-in-siteleaf/) to create “sticky” posts.

![](/uploads/meta-sticky.png)

Using the same metadata, we could grab all posts with this flag:

```liquid
{% raw %}{% assign sticky_posts = site.posts | where:"meta.sticky","yes" %}{% endraw %}
```

The same could be applied to any metadata. For example, we could find all posts with a color of “Red”:

```liquid
{% raw %}{% assign red_posts = site.pages | where:"meta.color","Red" %}{% endraw %}
```

Or posts with a particular tag:

```liquid
{% raw %}{% assign tagged_posts = site.posts | where:"taxonomy.tags","whiskey" %}{% endraw %}
```

Mm whiskey.

### Filter by year

You can also filter content by date parts including `year`, `month`, and `day`.

Here’s how we could get all posts published this year:

```liquid
{% raw %}{% assign latest_posts = site.posts | where:"year","2015" %}{% endraw %}
```

Again we could take this a step further and use a variable in place of year:

```liquid
{% raw %}{% assign this_year = site.date | date:"%Y" %}
{% assign new_posts = site.posts | where:"year",this_year %}{% endraw %}
```

<small>Follow [@siteleaf](http://twitter.com/siteleaf) and stay tuned for more [Advanced Liquid](/blog/tags/liquid)!</small>
