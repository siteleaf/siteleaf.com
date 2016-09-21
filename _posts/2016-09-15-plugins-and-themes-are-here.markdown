---
title: "Jekyll Plugins and Themes are here \U0001F389"
date: 2016-09-15 12:10:00 -04:00
tags:
- jekyll
description: We've updated to Jekyll 3.2 and Siteleaf now supports custom Jekyll plugins
  and Gem-based themes.
button:
  title: Get started
  url: "/plans"
---

Today's the day! We're excited to update to Jekyll 3.2, which brings over [100 improvements](http://jekyllrb.com/docs/history/#minor-enhancements-v3-2-0) including [Gem-based themes](https://learn.siteleaf.com/themes/gem-based-themes/).

In addition to themes, we're extremely happy to introduce support for third-party [Jekyll plugins](https://learn.siteleaf.com/themes/jekyll-plugins/). Sites on the new [Team, Business, and Enterprise plans](/plans) can now install and leverage custom plugins to extend the functionality of Jekyll and Siteleaf. As always, [whitelisted plugins](https://learn.siteleaf.com/themes/jekyll-plugins/#whitelisted-plugins) are supported on all other plans.

Sites on the free developer plan can make use of the new GitHub Pages-approved [Minima theme](https://github.com/jekyll/minima), while all paid plans (including legacy and Personal plans) can take full advantage of custom themes. Themes package layouts, includes, and stylesheets in a way that can be overridden by your site’s content. It is a great way to maintain a separation of content and code, and makes it possible to share themes across multiple sites.

We also gave the Jekyll build process a nice speed boost across the board. In some cases, you may notice your site building up to 2x as fast!


### How it works

When previewing or publishing your site, Siteleaf will now look for an optional `Gemfile` and install any custom Gem-based themes and plugins prior to building. If you're writing your own plugins, you can also include custom Ruby code in the `_plugins` directory as outlined in the [Jekyll docs](https://jekyllrb.com/docs/plugins/).

Custom plugins are supported even when publishing to GitHub Pages. Just make sure to choose the "Compiled by Siteleaf" format in your hosting settings, and Siteleaf will pre-compile your site before pushing it to GitHub.

See our docs for full instructions on [using themes](https://learn.siteleaf.com/themes/gem-based-themes/) and [plugins](https://learn.siteleaf.com/themes/jekyll-plugins/).

### Try it out

Interested in trying custom plugins but haven't yet upgraded to the Team (or higher) plan yet? [Get in touch](mailto:billing@siteleaf.com?subject=Team%20trial) and we'd be happy to give you a demo.