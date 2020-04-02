---
title: 'Advanced Liquid: Sort'
date: 2015-04-07 10:00:00 -04:00
tags:
- tutorial
- liquid
- v1
hero: "/uploads/sort.svg"
Docs:
- filters and tags
- sort
---

[Liquid](http://v1.siteleaf.com/help/themes/getting-started/) is the flexible templating language that powers themes on Siteleaf. While simple at first glance, there’s a lot of power under the hood for those wanting a greater level of control. In this new blog series, we’ll dive deeper and take a look at some advanced Liquid code and examples.

First up in this post, we’ll take a look at the `sort` [filter](http://v1.siteleaf.com/help/themes/filters-and-tags).

With any site, Siteleaf makes some general assumptions about your content. For example, posts are sorted by date (newest post shows first) and pages are sorted manually. In cases where this doesn’t fit your design, you can utilize the `sort` filter to order content any way you wish.

For example, here’s how we might sort pages by date:

```liquid
{% raw %}{% assign sorted = pages | sort:"date" %}{% endraw %}
```

This will sort in ascending order, but we could also choose descending order by adding `reverse`:

```liquid
{% raw %}{% assign sorted = pages | sort:"date" | reverse %}{% endraw %}
```

You can sort on [any property](http://v1.siteleaf.com/help/themes/variables/content/) like date, title, slug, even metadata and taxonomy. Below are few real-world examples you might find useful.


### Sort tags alphabetically

Tags by default are shown in the order in which they were added. If you’d like to display your tags ordered alphabetically, you can achieve this using the `sort` filter. 

In this example, we’ll create a variable called `sorted_tags` to hold our sorted tags using the [`assign`](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#variable-assignment) Liquid tag (feel free to use any variable name you wish):

```liquid
{% raw %}{% assign sorted_tags = tags | sort:"value" %}{% endraw %}
```

Once sorted, we can display the tags using the `sorted_tags` variable we just created:

```liquid
{% raw %}{% for tag in sorted_tags %}
  <li><a href="{{tag.url}}">{{tag.value}}</a></li>
{% endfor %}{% endraw %}
```

### Sort posts by metadata

Posts are generally shown in date order, but you can use the `sort` filter to order on any property. With the [power of metadata](/blog/metadata-in-siteleaf/), that can be pretty much anything you want. 

In this example, we’ll set up a meta field on our posts called `num` to manually sort with numeric values from 01 to 10:

![meta-num](/uploads/meta-num.png) 

Using the `sort` filter, we can now order posts by `meta.num`:

```liquid
{% raw %}{% assign sorted_posts = posts | sort:"meta.num" %}{% endraw %}
```

And of course, we can display these posts as we normally would:

```liquid
{% raw %}<ul>
  {% for post in sorted_posts %}
  <li><a href="{{post.url}}">{{post.title}}</a></li>
  {% endfor %}
</ul>{% endraw %}
```

### Sticky posts

Perhaps you’d like to have an important or “sticky” post show up first, and retain the default order for the rest of your posts. In this case we could use metadata again. 

For this example, we’ll add a meta field to our sticky post called `sticky` and set a value of "yes". We only need to add this to the sticky post, regular posts will have a blank value.

![meta-sticky](/uploads/meta-sticky.png) 

Now we can sort our posts by `meta.sticky`, but we’ll also add a second parameter (`last`) to make sure our non-sticky posts are pushed below.

```liquid
{% raw %}{% assign sorted_posts = site.posts | sort:"meta.sticky","last" %}{% endraw %}
```

By adding `last` you are telling Siteleaf to sort blank or null values last (the default is first).

**Bonus tip:** `meta.sticky` is equivalent to `meta["sticky"]`. Liquid supports both square bracket and dot notation, so if you have a preference feel free to stick with it.

<small>Stay tuned for more Advanced Liquid, up next we'll be looking at the filters `where` and `group_by`.</small>
