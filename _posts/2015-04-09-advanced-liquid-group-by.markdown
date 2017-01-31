---
title: 'Advanced Liquid: Group By'
date: 2015-04-09 16:30:00 -04:00
tags:
- tutorial
- liquid
- v1
hero: "/uploads/group_by.svg"
Docs:
- filters and tags
- group
---

Following [`sort`](/blog/advanced-liquid-sort/) and [`where`](/blog/advanced-liquid-where/), this [Advanced Liquid](/blog/tags/liquid) post introduces another handy new filter to Siteleaf: `group_by`.

As the name suggests, this filter allows you to group your content by a certain property. 

For example, here’s how we could group all posts by year published:

```liquid
{% raw %}{% assign posts_by_year = site.posts | group_by:"year" %}{% endraw %}
```

You can group by [any property](http://v1.siteleaf.com/help/themes/variables/content/) like date, title, slug, even metadata and taxonomy. Here are a few real-world examples you may want to apply to your theme.


### Group posts by author

With multiple authors on our blog, it may be a good idea to group together posts by each author. So let's do that.

Starting with `site.posts` (all posts within our site), we can apply the `group_by` filter with `author` as the parameter:

```liquid
{% raw %}{% assign posts_by_author = site.posts | group_by:"author" %}{% endraw %}
```

Behind the scenes, posts are collected into an array which looks something like this:

```json
[
  {"name": "Skylar Challand", "items": [...]},
  {"name": "Larry Fox", "items": [...]},
  ...
]
```

The property (in this case `author`) can be accessed by `name` and matching posts are grouped under `items`. Knowing that, we can display our grouped posts like this:

```liquid
{% raw %}{% for author in posts_by_author %}
  <dt>{{author.name}}</dt>
  {% for post in author.items %}
  <dd><a href="{{post.url}}">{{post.title}}</a></dd>
  {% endfor %}
{% endfor %}{% endraw %}
```

**Tip:** To sort our authors alphabetically we could also apply `sort` to our group:

```liquid
{% raw %}{% assign posts_by_author = site.posts | group_by:"author" | sort:"name" %}{% endraw %}
```

### Group posts by metadata

`group_by` also works on metadata and taxonomy. For example, here’s how we could group posts by color:

```liquid
{% raw %}{% assign posts_by_color = site.pages | group_by:"meta.color" %}{% endraw %}
```

Our grouped array will look something like this:

```json
[
  {"name": "red", "items": [...]},
  {"name": "blue", "items": [...]},
  ...
]
```

### Archive page

Grouping posts by year is a common pattern on archive pages. Since Siteleaf already [generates archive pages](http://v1.siteleaf.com/help/themes/naming-your-files/) for us, we can easily sprinkle in `group_by` and have a beautiful blog archive in minutes.

First, let’s group our posts by year:

```liquid
{% raw %}{% assign posts_by_year = posts | group_by:"year" %}{% endraw %}
```

<small>Note: We are using `posts` in this case rather than `site.posts` because we only want posts relative to this page (but either could work).</small>

Now we can display our grouped posts:

```liquid
{% raw %}{% for year in posts_by_year %}
  <h2>{{year.name}}</h2>
  <ul>
  {% for post in year.items %}
    <li><a href="{{post.url}}">{{post.title}}</a></li>
  {% endfor %}
  </ul>
{% endfor %}{% endraw %}
```

**Extra credit:** We could take this a step further and do a multi-level group, showing posts by year AND month:

```liquid
{% raw %}{% for year in posts_by_year %}
  <h2>{{year.name}}</h2>
  {% assign posts_by_month = year.items | group_by:"month" %}
  {% for month in posts_by_month %}
    <h3>{{month.items.first.date | date:"%B"}}</h3>
    <ul>
    {% for post in month.items %}
      <li><a href="{{post.url}}">{{post.title}}</a></li>
    {% endfor %}
    </ul>
  {% endfor %}
{% endfor %}{% endraw %}
```

In case you're wondering, `%B` gives us the month name (e.g. “April”) from a date. For full documentation see our [date formatting](http://v1.siteleaf.com/help/themes/filters-and-tags/date-formating) guide.

Until next time, happy coding!

<small>Follow [@siteleaf](http://twitter.com/siteleaf) and stay tuned for more [Advanced Liquid](/blog/tags/liquid).</small>
