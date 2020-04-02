---
title: 'Making your first Jekyll theme: Part 1'
date: 2017-10-03 12:00:00 -04:00
tags:
- tutorial
- jekyll
image: "/uploads/making-jekyll-theme-intro.jpg"
---

![](/uploads/making-jekyll-theme-intro.jpg)

*This is a guest post by [David Darnes](https://darn.es), creator of the [Alembic](https://alembic.darn.es) theme.*

By nature, any well structured site that has easily editable content is 'themeable' — a layer, or skin, that presents content in the way the owner or creator intended; Jekyll is no different. Pages, posts and any other form of formatted content can be segregated from the templating files. 

Themes for Jekyll have been around for a while, but the process of installing a theme *was* a bit clunky. Content files and templating files would have to be carefully copied over. But, with the introduction of [**Gem-based themes**](https://jekyllrb.com/docs/themes/), themes can now be installed with a couple of lines of code.



## How do themes work?

Jekyll themes allow you to contain all the templating and presentational code within a Ruby gem, much in the same way Jekyll plugins are contained. This means the design can be easily applied to a site, used on multiple sites, and the site codebase isn’t cluttered by the presentational layer.

```
root/
├── _posts/
│   └── my-amazing-post-14-09-2017.md
├── index.html
├── Gemfile
├── _config.yml
├── 404.md
└── about.md
```

Example of a Jekyll site structure when using a theme gem
{: .caption}

Additionally, theme files can be overwritten, similarly to how [WordPress child themes](https://code.tutsplus.com/articles/how-to-modify-the-parent-theme-behavior-within-the-child-theme--wp-31006) work. If you're not familiar with them, this overwriting technique means that any file within the theme can be replaced with a file in the site project. All you need to do is match the file path and name in your project with the one in the theme.

## How can I use a theme?

Installing a theme is really quite simple, but if you're a bit new to Jekyll, you may be understandably a bit hesitant to try them out.

First, you should add the theme you want to use to the list of gems you're using for your site:

```ruby
# Main jekyll gem
gem "jekyll", "~> 3.4"

# My selected theme gem
gem "alembic-jekyll-theme", "~> 2.2"

# Any plugins I'm using
group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
end
```

The code above is from an example `Gemfile`. The `Gemfile` is designed to manage all the gems in your project in conjunction with [Bundler](http://bundler.io/). In this case, I'm installing my own theme, `alembic-jekyll-theme`, along with the other Jekyll related plugins.

The second step is to set the theme in your `_config.yml` file:

```yaml
theme: alembic-jekyll-theme
```

After you've set these two options, you'll need to use Bundler to install the newly added theme and build, or serve, your site. So, in your command line interface, run:


```sh
$ bundle install
```

Install the theme gem and...

```sh
$ bundle exec jekyll build
```

...to build the site.

For further reading, check out [Siteleaf's learning resource on how to use Jekyll themes](https://learn.siteleaf.com/themes/gem-based-themes/).

## What themes can I use?

![making-jekyll-theme-slices.jpg](/uploads/making-jekyll-theme-slices.jpg)

Themes are growing at a slow, but steady pace. There are a few Jekyll theme directories, but they list themes created in both the old and the current way. If you're looking for themes using the current method, then search for ['jekyll theme' on rubygems.org](https://rubygems.org/search?query=jekyll+theme).

Here are a couple of themes I've made:

- [**Alembic**](https://alembic.darn.es) - a theme that has been designed to work out of the box, as well as a boilerplate for your project
- [**Garth**](https://garth.darn.es) - a theme designed to be a very simple, yet stylish blog

Both of my themes have been built with Siteleaf in mind, so you should be able to set up a new Siteleaf site with these without too much trouble. I'd also recommend [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/), an incredibly powerful theme by Michael Rose. Michael has been working with Jekyll theming for longer than I have and is very thorough with his code.

For those of you who are using GitHub Pages to host their Jekyll site, there are a [set of whitelisted themes](https://pages.github.com/themes/). This, I would say, is partly the reason why themes haven't grown at the rate they could be growing at.

There are a large portion of Jekyll users who are also using GitHub Pages to host and manage their site, which means they are limited to this subset of themes. There are ways around this though such as using a [Siteleaf Team+ plan](https://www.siteleaf.com/plans/) which allows you to [use any custom Jekyll theme](https://learn.siteleaf.com/themes/gem-based-themes/) and [any custom plugin](https://learn.siteleaf.com/themes/jekyll-plugins/#third-party-plugins).

## Tips for making a great theme

If you’re keen to make a theme yourself, may I suggest a few tips I’ve learnt from my theming experience.

![making-jekyll-theme-checklist.jpg](/uploads/making-jekyll-theme-checklist.jpg)

Here are a few tips I'd keep in mind when creating your own theme, especially if you want your theme to be used by other Jekyll (and Siteleaf) users:

1. **Test your theme:** You can't do enough testing. The best way I've found is to follow your own documentation and install the theme from scratch. Testing your theme with varying content will help too. Themes have to cater for a range of content types and sizes, something a regular site build doesn't really have to do (there are exceptions).
2. **Provide good documentation:** All good themes come with well written and clear documentation files. This is actually a specific requirement when submitting to large theme marketplaces like ThemeForest. Make sure the installation process is easy to follow, and that all the features & options within your theme are covered. I do my best to keep the [documentation on how to use Alembic](https://github.com/daviddarnes/alembic#alembic) up to date.
3. **Avoid too much complexity:** I've seen many WordPress themes fall victim to being too clever. It's hard to do, but try to strike a balance between a rich set of options and a solid *"out of the box"* form. You don't want people who are using the theme to get frustrated that it doesn't look like the demo. Additionally, Jekyll is a simple site generator and your theme should follow that ilk.
4. **Find a purpose:** Designing a theme that is desirable by a number of people, yet caters for a certain industry type, can be quite hard. I'm not saying your theme should be designed specifically for the Spirit Level Bubble Research Community, but maybe the construction industry as a whole. There are a lot of ‘Swiss Army knife’ style themes out there, which is why you're better off not competing with them and going after a slightly more subset audience.
5. **Build it for extensibility:** It's likely that someone will use your theme, but will want to change a few things around, so try to build your theme in an expected manner. Name your layout and asset files following [the common convention](https://jekyllrb.com/docs/structure/), and use include names that could be guessed (for example `icon.html` would probably add an icon).

## How do I create a Jekyll theme?

Looking for something a little more in-depth? Well, [tune into the second article](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-2/) of this 2 part series, where I will fully explain how to create a Jekyll theme that people can use in their next Siteleaf site.

Feel free to [tweet me with any questions](https://twitter.com/DavidDarnes) you have on what I’ve talked about. You can also chat with the [Siteleaf community](https://chat.siteleaf.com/) for further questions and to share your development work.