---
title: Using Markdown in metadata
date: 2013-10-29 11:55:00 -04:00
tags:
- tip
- markdown
- liquid
- v1
Docs:
- metadata
---

In previous posts, we talked about using [Markdown](/blog/markdown-in-siteleaf/) for text formatting and [Metadata](/blog/metadata-in-siteleaf/) for extending your content in Siteleaf.

Markdown makes it easy to add links and `*emphasis*` to your content without having to write HTML. While your `body` content uses Markdown by default, you can also apply this easy-to-use formatting to your metadata.




Just add Markdown right in your metadata field:

![meta-markdown](/uploads/meta-markdown.png) 

Then in your template, apply the [markdown](https://github.com/siteleaf/siteleaf-themes#filters-and-tags) Liquid filter:

```liquid
{% raw %}{{site.meta['sidebar'] | markdown}}{% endraw %}
```

That's it!

You can use this to add links and simple markup to sidebar text, footers, post summaries, and anywhere else you use metadata.
