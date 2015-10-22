---
date: 2015-10-21 14:09:00 Z
headline: A new Siteleaf.
button_text: Sign up for Beta
features:
- title: Built on open source.
  body: Siteleaf now uses Jekyll to generate static sites. It’s the same technology
    GitHub Pages uses to power over half a million sites.
- title: Improved metadata.
  body: Siteleaf metadata is now fully compatible with YAML. We’ve also given you
    thoughtful controls to manage complex data like arrays and objects. Simple, yet
    powerful.
  background: smoke
- title: Even more developer-friendly.
  body: Thanks to Jekyll, you can now develop sites completely offline. Plus, enjoy
    built-in support for Sass and CoffeeScript. The future is now.
  align: right
- title: An API for your content.
  body: Siteleaf provides a JSON API for interacting with all of your Jekyll content.
    It’s your data. Use it how you want.
  background: green
- title: Platform independent.
  body: Your data shouldn’t be tied to a particular CMS. That’s why we’ve made your
    code completely, 100% portable.
  align: right
- title: Sync files with GitHub.
  body: Update your content on Siteleaf. Or push changes to your site on GitHub. Everything
    stays up to date.
  background: smoke
- title: Import your existing site.
  body: Ready to make the switch to Siteleaf? You can import your existing site from
    Jekyll, WordPress, Tumblr, Drupal, Ghost, and more.
  background: blue
  align: center
permalink: "/"
layout: default
title: Features
---

<section class="section section--blue">
  <div class="wrap wrap--narrow">
    <a href="{{ site.baseurl }}/"><img class="logo" src="/uploads/logo.svg" alt="{{ site.title }}" /></a>
    <h1 class="section__title section__title--headline">{{ page.headline }}</h1>
    <a class="button button--onDark" href="https://siteleaf.typeform.com/to/EoFRli">{{ page.button_text }}</a>
  </div>
</section>

{% for feature in page.features %}
  <section class="section{% if feature.background %} section--{{ feature.background }}{% endif %}{% if feature.align %} section--{{ feature.align }}{% else %} section--left{% endif %}">
    <div class="wrap wrap--wide">
      <h1 class="section__title">{{ feature.title }}</h1>
      <p class="section__body">{{ feature.body }}</p>
    </div>
  </section>
{% endfor %}
