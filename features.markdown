---
date: 2015-10-21 14:09:00 Z
headline: A more powerful, more open Siteleaf.
features:
- title: Import your existing site.
  body: Ready to make the switch to Siteleaf? You can import your existing site from
    Jekyll, WordPress, Tumblr, Drupal, Ghost, and more.
- title: Sync files with GitHub.
  body: Update your content on Siteleaf. Or push changes to your site on GitHub. Everything
    stays up to date.
- title: Platform independent.
  body: Your data shouldn’t be tied to a particular CMS. That’s why we’ve made your
    code completely, 100% portable.
- title: An API for your content.
  body: Siteleaf provides a JSON API for interacting with all of your Jekyll content.
    It’s your data. Use it how you want.
- title: Even more developer-friendly.
  body: Thanks to Jekyll, you can now develop sites completely offline. Plus, enjoy
    built-in support for Sass and CoffeeScript. The future is now.
- title: Improved metadata.
  body: Siteleaf metadata is now fully compatible with YAML. We’ve also given you
    thoughtful controls to manage complex data like arrays and objects. Simple, yet
    powerful.
- title: Built on open source.
  body: Siteleaf now uses Jekyll to generate static sites. It’s the same technology
    GitHub Pages uses to power over half a million sites.
permalink: "/"
layout: default
title: Features
---

<section class="section">
  <h1>{{ page.headline }}</h1>
</section>

{% for feature in page.features %}
  <section class="section">
    <h2>{{ feature.title  }}</h2>
    <p>{{ feature.body  }}</p>
  </section>
{% endfor %}
