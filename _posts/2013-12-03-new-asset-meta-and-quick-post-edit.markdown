---
title: 'New: Asset Metadata and Quick Post Edit'
date: 2013-12-03 14:53:00 -05:00
tags:
- announcement
- v1
hero: "/uploads/asset-metadata.png"
Docs:
- metadata
- assets
---

We're constantly working on improving the Siteleaf experience and making it as flexible as possible. Today we're happy to introduce two new features:

### Asset metadata

Just like [metadata](/blog/metadata-in-siteleaf/) on your Siteleaf posts, pages, and sites, asset metadata is a flexible way to add additional information to the assets uploaded to your site. This is perfect for things like captions, alt text, adding location info, and more. In your Siteleaf theme, you can access asset metadata through the asset's [meta variable](https://github.com/siteleaf/siteleaf-themes#metadata). For example, if you had an asset meta field with a name of "caption", you would access its value like so:

```
asset.meta.caption
```

For a more advanced example of how you could use asset metadata, [check out our latest Siteleaf lab](http://labs.siteleaf.net/responsive-images/) where we use asset metadata and a JS library to swap out images based on the window width.

### Quick post edit

![quick-post-edit](/uploads/quick-post-edit.jpg) 

Another new feature we've added to the Siteleaf management area is the ability to quickly edit a post without leaving the list of posts. This is perfect if you just need to make a small change to a post's title, toggle its visibility, or to reorder your posts by their publish date.
