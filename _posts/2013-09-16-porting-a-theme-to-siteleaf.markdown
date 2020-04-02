---
title: Porting a theme to Siteleaf
date: 2013-09-16 11:05:00 -04:00
tags:
- tutorial
- liquid
- v1
hero: "/uploads/porting-a-theme-to-siteleaf-martin.png"
Docs:
- getting started
---

Today, I ported [another theme](http://martin.siteleaf.net) to [Siteleaf](/)—[Allison House's](http://twitter.com/house) [Martin theme](http://house.github.io/martin/). I started porting themes to Siteleaf earlier this month as a self-imposed challenge. A friend of mine asked if a particular theme was possible to implement using Siteleaf and rather than answer with a simple 'yes', I responded with [the ported theme](http://balzac.siteleaf.net). This was a great way of demonstrating Siteleaf's adaptability, but also a useful exercise for myself to see where Siteleaf excels and where it falls short. In this post, I'll walk through porting the Martin theme and show you just how easy it can be.


If you first take a look at the [diff](https://github.com/destroytoday/martin-for-siteleaf/commit/4d7bb736b682294513db591d9c47bdb34713c507#L9R3) on Github, you'll immediately see how little I needed to change in order to port the theme to Siteleaf. In fact, I only replaced six lines—and I deleted several dozen in the process. I accomplished this by extracting the theme's content to Siteleaf and wiring these spots to page variables and meta fields.

![porting-a-theme-to-siteleaf-sections](/uploads/porting-a-theme-to-siteleaf-sections.png)

Looking at the previous code, we can separate the entire page into three sections—header, body (represented as a `<section>`), and footer. If we take a closer look at the body, the bulk of it is simple HTML that can easily be rendered from Markdown. Because of this, we can replace the entire block of code inside the `<section>` tag with the liquid tag `{% raw %}{{ body }}{% endraw %}` and move the previous content into a Siteleaf page body, rewritten in Markdown. Siteleaf will render that Markdown to HTML, inject it into our template, and allow us to modify it easily in the CMS, without touching the template code. Previously, the snippet of code to produce a table looked like this:

```html
<h2>Table</h2>
<table>
  <thead>
    <tr>
      <th>Whiskey</th>
      <th>Tango</th>
      <th>Foxtrot</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>1</td>
      <td>a</td>
    </tr>
    <tr>
      <td>Blueberry</td>
      <td>2</td>
      <td>b</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>3</td>
      <td>c</td>
    </tr>
  </tbody>
</table>
```

Now, thanks to Markdown, we can replicate this table in the Siteleaf CMS, using the following code:

```markdown
## Table

| Whiskey    | Tango | Foxtrot |
| ---------- | ----- | ------- |
| Apple      | 1     | a       |
| Blueberry  | 2     | b       |
| Banana     | 3     | c       |
```

The end result is the same both ways, but with Siteleaf and Markdown, the content is much easier to digest and no longer hard-coded into the template. You can compare the before/after of the page's content in these two gists: [HTML](https://gist.github.com/destroytoday/6598835) vs [Markdown](https://gist.github.com/destroytoday/6598658)

The body content is typically the easiest to extract because Siteleaf does most of the work. Let's now take a look at the header, which is comprised of a few external links, the page's title and its tagline.

![porting-a-theme-to-siteleaf-header](/uploads/porting-a-theme-to-siteleaf-header.png)

If this theme were meant for multiple pages, the links at the top would appear on every page, so it's safe to consider these global values. As such, we can extract them into site meta fields. Starting with the byline in the top-left, we *could* simply replace it with the full URL to the GitHub profile page, but instead, let's write the template in a way that saves us from repeating the URI with every occurrance. I take this approach because we use several GitHub links on the top bar, including one for the repo and another for a zip of the master branch. Here's a look at the previous code:

```liquid
<div class="byline">
  <a href="https://github.com/house">github.com/house</a>
</div>
<div class="downloads">
  <a href="https://github.com/house/martin">Fork on GitHub</a>
  &bull;
  <a href="https://github.com/house/martin/archive/master.zip">Download ZIP</a>
</div>
```

The base GitHub URL appears three times (and once without the protocol), the GitHub username four times, and the GitHub repo name twice. If we take a stance and agree to use GitHub to host our source code when using this theme, we can extract both the GitHub username and repo name into site meta fields:

```liquid
{% raw %}<div class="byline">
  <a href="https://github.com/{{ site.meta.github_user }}">github.com/{{ site.meta.github_user }}</a>
</div>
<div class="downloads">
  <a href="https://github.com/{{ site.meta.github_user }}/{{ site.meta.github_repo }}">Fork on GitHub</a>
  &bull;
  <a href="https://github.com/{{ site.meta.github_user }}/{{ site.meta.github_repo }}/archive/master.zip">Download ZIP</a>
</div>{% endraw %}
```

With this setup, if we ever decide to change our username or repo name, we only need to do it once, without touching the template code. I try to extract as much content as possible, so anyone could upload the theme and have full control over the copy. We can achieve this with a couple more site meta fields, but let's also specify fallbacks, so these are optional to the user:

```liquid
{% raw %}<div class="byline"><a href="https://github.com/{{ site.meta.github_user }}">github.com/{{ site.meta.github_user }}</a></div>
<div class="downloads">
  <a href="https://github.com/{{ site.meta.github_user }}/{{ site.meta.github_repo }}">{{ site.meta.fork_text | fallback: 'Fork on GitHub' }}</a>
  &bull;
  <a href="https://github.com/{{ site.meta.github_user }}/{{ site.meta.github_repo }}/archive/master.zip">{{ site.meta.download_text | fallback: 'Download ZIP' }}</a>
</div>{% endraw %}
```

The second half the header consists of the page's title and tagline. Since this theme is intended to be a single, standalone page, I could've used the site title and a site meta field for the tagline, but I wanted to keep it open to multiple pages, so I went with the page title and a page meta field:

```liquid
{% raw %}<hgroup>
  <h1>{{ title }}</h1>
  <h2 class="tagline">{{ meta.tagline }}</h2>
</hgroup>{% endraw %}
```

Now, if we ever add a 'Team' page, we can adapt the header to the new page without needing to touch the template.

The last remaining piece of the puzzle is the window title. Typically, I set this to `{{ site.title }} / {{ title }}`, but this theme's title includes both the title and a credit to the creator, Allison. Rather than set the site title to such a length, once again, I used a site meta field with a fallback to the site title:

```liquid
{% raw %}<title>{{ site.meta.window_title | fallback: site.title }}</title>{% endraw %}
```

Again, the user can upload the theme without specifying the `window_title`, but it's also there if they need it.

### Wrapping up

Allison's theme, [Martin](http://house.github.io/martin/), is a beautiful theme, and its simplicity, both in style and code, is what attracted me. While the theme is a good example for a single-page site, there is so much more to cover when porting larger, more complex themes. Hopefully, this walkthrough gives you a solid starting point to try it for yourself. I'm going to continue porting themes to Siteleaf, while providing the source code on [my GitHub account](https://github.com/destroytoday). You can also check out the [list of existing themes](https://github.com/siteleaf/siteleaf-themes/wiki/Siteleaf-themes-on-Github) on the Siteleaf wiki.
