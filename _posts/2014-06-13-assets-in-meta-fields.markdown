---
title: 'Quick tip: Assets in meta fields'
date: 2014-06-13 10:22:00 -04:00
tags:
- tip
- liquid
- v1
hero: 
---

![](/uploads/pdf.gif) 

Siteleaf makes it easy to assign assets in your metadata fields, just drag and drop (as shown above).

Now in your theme, you can easily link to your asset:

```liquid
{% raw %}<a href="{{ meta['project_link'] }}">
  {{ meta['project_link_title'] }}
</a>{% endraw %}
```

This is a great way to reference special assets like featured images or PDF downloads.

To learn more about metadata see our tutorial [Metadata in Siteleaf](/blog/metadata-in-siteleaf).
