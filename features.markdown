---
date: 2015-10-21 14:09:00 Z
headline: A new Siteleaf.
button_text: Sign up for v2 beta
features:
- title: Open source superpowers.
  is_nested: true
  body:
  - title: Compatible with Jekyll
    body: We’ve reimagined Siteleaf’s templating system to be 100% compatible with Jekyll. We’re keeping all the best parts of the Liquid syntax you already love, and making it work with a larger ecosystem. Now you can use any off-the-shelf Jekyll theme, or even take your Siteleaf theme with you.
  - title: Data portability
    body: We believe your data belongs to you. With Jekyll, your entire site’s source code and content are now portable, not just the compiled HTML. Move sites into and out of Siteleaf easily. Even compile it yourself without using Siteleaf. You’ll never be locked into a CMS again.
- title: Sync with GitHub.
  is_nested: true
  body:
  - title: Theme syncing
    body: No more manually pushing and pulling your theme changes using the command line. Siteleaf will automatically sync theme changes directly with GitHub, with no need to install a Siteleaf gem.
  - title: Time machine for your content
    body: No more accidental overwrites or deletes. Every edit you (or other authors) make in Siteleaf is synced and backed up to GitHub, including content and theme changes. See a log of all edits, who made them, and revert back to any state
      with the Git tools you already use.
  background: smoke
  graphic: g-github
- title: More powerful.
  is_nested: true
  body:
  - title: Advanced metadata
    body: Metadata now supports nested arrays and objects, plus a shiny new interface that supports drag and drop ordering. It’s the metadata editor of your dreams. Lots more coming soon, including magic fields for images, dates, and more.
  - title: Custom permalinks
    body: Customize the way your site is generated. Choose date-based permalinks (<code>/2015/10/20/hello-world</code>), pretty permalinks (<code>/posts/hello-world</code>), or whatever suits your needs.
  - title: More than just pages and posts
    body: Sticking to pages and posts made Siteleaf v1 simple, but content can sometimes be more complicated. Now in addition to pages and posts, you can create custom sets of content (called Collections), each with their own entries (called Documents). Choose to output your documents just like posts, or simply use them as super-metadata within your theme.
- title: More developer-friendly.
  is_nested: true
  body:
  - title: Offline development
    body: Sync your Siteleaf content to local Markdown files and develop your site completely offline. Work faster, even without an internet connection.
  - title: Preprocessors built-in
    body: Siteleaf now includes built-in support for compiling Sass, SCSS, and CoffeeScript, thanks to the power of Jekyll.
  background: smoke
  graphic: g-develop
- title: Free for developers.
  body: While we’ve always had free accounts for developers, publishing was reserved for paid accounts only. We’re now making it possible to publish to GitHub Pages, totally free for developers and open source projects.
- title: Import from v1, WordPress, and more.
  body: Export your existing v1 site content to v2-ready Jekyll format using the existing Siteleaf gem (<code>siteleaf export</code>). Also import your content from WordPress, Tumblr, Ghost, Drupal, and more using the community-supported Jekyll Import.
  background: smoke
- title: Plus, all that you already love about Siteleaf.
  is_nested: true
  body:
  - title: A smart text editor
    body: Whether you prefer writing in Markdown, HTML, or plaintext, we’ve got you covered. Drag and drop an image and we’ll insert its code, too.
  - title: Collaboration
    body: Invite your client or team and let them tinker all they want, without touching a line of code. Siteleaf supports different user roles, like Admin, Publisher, or Writer.
  - title: Publish anywhere
    body: Have the freedom to publish to any web host you want, including FTP, SFTP, Amazon S3, GitHub Pages, and Rackspace Cloud Files.
  - title: An API for your content
    body: Siteleaf provides a JSON API for interacting with all of your Jekyll content. Integrate it into other sites, apps, or anything you want. It’s your data.
  graphic: g-editor
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
  <section class="section section--feature{% if feature.background %} section--{{ feature.background }}{% endif %}{% if feature.align %} section--{{ feature.align }}{% endif %}{% if feature.graphic %} section--graphic{% endif %}">
    <div class="wrap wrap--narrow">
      <h2 class="section__title">{{ feature.title }}</h2>
      {% if feature.graphic %}
        {% if feature.graphic == "g-github" %}
          <div class="section__graphic g-github">
            <div class="g-github__item">
              <img class="g-github__avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/liang/73.jpg" />
              <img class="g-github__avatarChild" src="/uploads/logo.svg" />
              <div class="g-github__text">
                <p class="g-github__commitTitle">Updated News and 2 other files</p>
                <div class="g-github__commitMeta"><span class="g-github__user">liang</span> committed with Siteleaf 10 minutes ago</div>
              </div>
            </div>
            <div class="g-github__item">
              <img class="g-github__avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jcoleman/73.jpg" />
              <img class="g-github__avatarChild" src="/uploads/logo.svg" />
              <div class="g-github__text">
                <p class="g-github__commitTitle">Updated Contact</p>
                <div class="g-github__commitMeta"><span class="g-github__user">jcoleman</span> committed with Siteleaf 6 hours ago</div>
              </div>
            </div>
            <div class="g-github__item">
              <img class="g-github__avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/amarkdalen/73.jpg" />
              <img class="g-github__avatarChild" src="/uploads/logo.svg" />
              <div class="g-github__text">
                <p class="g-github__commitTitle">Updated About and 3 other files</p>
                <div class="g-github__commitMeta"><span class="g-github__user">amarkdalen</span> committed with Siteleaf 3 days ago</div>
              </div>
            </div>
          </div>
        {% elsif feature.graphic == "g-editor" %}
          <div class="section__graphic g-editor">
            <div class="g-editor__bar">
              <span class="g-editor__bold g-editor__button">B</span>
              <span class="ss-icon g-editor__button">link</span>
              <span class="ss-icon g-editor__button">image</span>
            </div>
            <div class="g-editor__textarea">Last week, [I ran through](/blog/overview) a number of [Siteleaf's](http://siteleaf.com) most compelling features and provided a general overview of the service.

### Creating your site

![site-settings](/assets/site-settings.png)</div>
          </div>
        {% elsif feature.graphic == "g-develop" %}
          <div class="section__graphic g-develop">
            <div class="g-develop__window g-develop__site">
              <div class="g-develop__topBar">
                <span class="g-develop__topButtons">
                  <span class="g-develop__windowButton"></span>
                  <span class="g-develop__windowButton"></span>
                  <span class="g-develop__windowButton"></span>
                  <span class="g-develop__navButton ss-icon">navigateleft</span>
                  <span class="g-develop__navButton ss-icon">navigateright</span>
                </span>
                <span class="g-develop__site__navInput">localhost:4000</span>
              </div>
              <div class="g-develop__site__content">
                <h1>My Website</h1>
                <p>Puff Daddy Ghost pottery scene cupidatat end of the road exercitation Meg Ryan, Jurassic Park extreme sports ut Sublime Chronic. Keds the Truman Show Cory Matthews Real World Furby, Independence Day Topanga Sony Playstation DJ Jazzy Jeff. Dolor officia glow in the dark stickers bubble tape Steve Urkel, Discman sint Mariah Carey Kazaa Members Only jackets personalized mixtapes.</p>
              </div>
            </div>
            <div class="g-develop__window g-develop__editor">
              <div class="g-develop__topBar">
                <span class="g-develop__topButtons">
                  <span class="g-develop__windowButton"></span>
                  <span class="g-develop__windowButton"></span>
                  <span class="g-develop__windowButton"></span>
                </span>
                default.html
              </div>
              <div class="g-develop__editor__text">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &#123;% include head.html %}
  &lt;body class=&quot;page&quot;&gt;
    &#123;% include header.html %}
    &lt;main class=&quot;page__main&quot;&gt;
      &#123;&#123; content }}
    &lt;/main&gt;
    &#123;% include footer.html %}
  &lt;/body&gt;
&lt;/html&gt;</div>
            </div>
          </div>
        {% else %}
          <img class="section__graphic" src="/uploads/{{ feature.graphic }}" />
        {% endif %}
      {% endif %}
      <section class="section__text">
        {% if feature.is_nested %}
          {% for subfeature in feature.body %}
            <h4 class="section__subtitle">{{ subfeature.title }}</h4>
            <p class="section__body">{{ subfeature.body }}</p>
          {% endfor %}
        {% else %}
          <p class="section__body">{{ feature.body }}</p>
        {% endif %}
      </section>
    </div>
  </section>
{% endfor %}

<section class="section section--blue">
  <div class="wrap wrap--narrow">
    <h2 class="section__title">Ready to try the new Siteleaf?</h2>
    <a class="button button--onDark" href="https://siteleaf.typeform.com/to/EoFRli">{{ page.button_text }}</a>
  </div>
</section>