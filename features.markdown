---
date: 2015-10-21 14:09:00 Z
headline: A new Siteleaf.
button_text: Sign up for v2 beta
features:
- title: Open source superpowers.
  body: We’ve reimagined Siteleaf’s templating system to be 100% compatible with Jekyll. We’re keeping all the best parts of the Liquid syntax you already love, and making it compatible with a larger ecosystem. Now you can use any off-the-shelf Jekyll theme, or even take your Siteleaf theme with you.
- title: Sync with GitHub.
  body: No more manually pushing and pulling your theme changes using the command line. Siteleaf will automatically sync theme changes directly with GitHub, with no need to install a Siteleaf gem.
  background: smoke
- title: Time machine for your content.
  body: No more accidental overwrites or deletes. Every edit you (or other authors) make in Siteleaf is synced and backed up to GitHub, including content and theme changes. See a log of all edits, who made them, and revert back to any state with the Git tools you already use.
  background: green
- title: More powerful.
  body:
  - title: Advanced metadata
    body: Metadata now supports nested arrays and objects, plus a shiny new interface that supports drag and drop ordering. It’s the metadata editor of your dreams. Lots more coming soon, including magic fields for images, dates, and more.
  - title: Custom permalinks
    body: Customize the way your site is generated. Choose date-based permalinks (<code>/2015/10/20/hello-world</code>), pretty permalinks (<code>/posts/hello-world</code>), or whatever suits your needs.
  - title: More than just pages and posts
    body: Sticking to pages and posts made Siteleaf v1 simple, but content can sometimes be more complicated. Now in addition to pages and posts, you can create custom sets of content (called Collections), each with their own entries (called Documents). Choose to output your documents just like posts, or simply use them as super-metadata within your theme.
  is_nested: true
- title: More developer-friendly.
  body:
  - title: Offline development
    body: Sync your Siteleaf content to local Markdown files and develop your site completely offline. Work faster, even without an internet connection.
  - title: Preprocessors built-in
    body: Siteleaf now includes built-in support for compiling Sass, SCSS, and CoffeeScript, thanks to the power of Jekyll.
  is_nested: true
  background: smoke
- title: Data portability.
  body: We’ve always felt strongly that your data belongs to you, with the freedom publish to any web host you want, including FTP, SFTP, Amazon S3, GitHub Pages, and Rackspace Cloud Files. Now with Jekyll, your entire site’s source code and content is portable, not just the compiled HTML. Move sites into and out of Siteleaf easily. Even compile it yourself without using Siteleaf. You’ll never be locked into a CMS again.
- title: Free for developers.
  body: While we’ve always had free accounts for developers, publishing was reserved for paid accounts only. We’re now making it possible to publish to GitHub Pages, totally free for developers and open source projects.
  background: green
- title: Import from v1, WordPress, and more.
  body: Export your existing v1 site content to v2-ready Jekyll format using the existing Siteleaf gem (<code>siteleaf export</code>). Also import your content from WordPress, Tumblr, Ghost, Drupal, and more using the community-supported Jekyll Import.
- title: Plus, all that you already love about Siteleaf.
  body:
  - title: A smart text editor
    body: Whether you prefer writing in Markdown, HTML, or plaintext, we’ve got you covered. Drag and drop an image and we’ll insert its code, too.
  - title: Collaboration
    body: Invite your client or team and let them tinker all they want, without touching a line of code. Siteleaf supports different user roles, like Admin, Publisher, or Writer.
  - title: Fast and secure
    body: Siteleaf generates static files when you publish, which means your site loads faster, is more secure, and doesn’t rely on a database or complicated server setup.
  - title: An API for your content
    body: Siteleaf provides a JSON API for interacting with all of your Jekyll content. Integrate it into other sites, apps, or anything you want. It’s your data.
  is_nested: true
  background: smoke
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
    <div class="wrap wrap--narrow">
      <h2 class="section__title">{{ feature.title }}</h2>
      {% if feature.is_nested %}
        {% for subfeature in feature.body %}
          <h4 class="section__subtitle">{{ subfeature.title }}</h4>
          <p class="section__body">{{ subfeature.body }}</p>
        {% endfor %}
      {% else %}
        <p class="section__body">{{ feature.body }}</p>
      {% endif %}
    </div>
  </section>
{% endfor %}

<section class="section section--blue">
  <div class="wrap wrap--narrow">
    <h2 class="section__title">Ready to try the new Siteleaf?</h2>
    <a class="button button--onDark" href="https://siteleaf.typeform.com/to/EoFRli">{{ page.button_text }}</a>
  </div>
</section>
