---
title: Cleaning unused uploads from your site
date: 2024-09-12 08:56:00 -04:00
tags:
- tip
---

As websites and blogs continue to grow, so can the amount of user-uploaded content like images and videos. Over time, it can be tricky to figure out what’s actually used and what’s just collecting dust. 

We recently helped a customer clean up 5 gigabytes(!!) of unused assets, and you might be surprised how much digital clutter is lurking on your site too. Here's how you can find out.

TL;DR You can now use the official [Siteleaf Ruby gem](https://github.com/siteleaf/siteleaf-gem) to check for unused uploads by running: `siteleaf clean`.
{: .tip}


#### Checking for unused assets

While you can use the [Siteleaf gem](https://github.com/siteleaf/siteleaf-gem) to do this for you, follow along if you are interested in seeing how we got there (or want to write your own script).

First, you'll want to build your full site (including all drafts and unpublished documents) to get a picture of what assets are in use:

```sh
$ bundle exec jekyll serve --unpublished --drafts --future
```

Now we can search the `_site` folder to verify if an asset is linked or embedded somewhere in its outputted HTML files:

```sh
$ grep -rl "/uploads/screenshot.png" _site
```

Grep can be a little slow if you have a lot of content, so we can use [The Silver Searcher](https://geoff.greer.fm/ag/) ([GitHub](https://github.com/ggreer/the_silver_searcher)) to greatly speed things up.

To install on a Mac, run:

```sh
$ brew install the_silver_searcher
```

Then you can search using:

```sh
$ ag -lQ "/uploads/screenshot.png" _site
```

Of course, you won't want to search for each asset one-by-one, so we can write a simple shell script to loop through all the files in `_uploads`:

<script src="https://gist.github.com/sskylar/1008a0ab7d7aed5b75bd6f6f402b0ea6/6657b7b2a678fd9697132f534de1c84e64f864eb.js"></script>

If you have files with spaces or other special characters, you'll want to encode the filenames. We can use Jekyll's `URL.escape_path` to [do just that](https://gist.github.com/sskylar/1008a0ab7d7aed5b75bd6f6f402b0ea6).

### Using the Siteleaf gem

To make things super easy and save you the hassle of maintaining your own script, we decided to add a simple command to our (open source) [Siteleaf gem](https://github.com/siteleaf/siteleaf-gem).

First, add the following to your `Gemfile`:

```rb
source "https://rubygems.org"

gem 'jekyll'

group :development do
  gem 'siteleaf'
end
```

After a `bundle update` you can now run `siteleaf clean` or:


```sh
$ bundle exec siteleaf clean _uploads
```

This command will build your site locally, check for any unused files, and prompt if you would like to remove them:

```
Building Jekyll site...

Finding unused files...
_uploads/3D_slice.mp4
_uploads/Logo final final 2.svg
_uploads/Screen Shot 2020-09-16 at 9.42.59 AM.png
=> Delete above 3 file(s)? (y/n)
```

This all happens locally, and works with any Jekyll site — even if you don't use Siteleaf. To remove the assets from Siteleaf, you'll just need to commit your changes to GitHub and everything will be synced automatically.

Happy cleaning!