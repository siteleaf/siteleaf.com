---
title: Cleaning unused uploads
date: 2024-09-12 08:56:00 -04:00
tags:
- tip
---

As websites and blogs continue to grow, so can the amount of user-uploaded content like images and videos. Over time, it might be hard to tell how many of these assets are still being used. 

We recently helped a customer clean up 5 gigabytes(!!) of unused assets, and you might also be surprised how much data is collecting digital dust on your own site. Here's how you can find out.



First, let's build the full site (including drafts) to get a picture of what assets are needed:

```sh
$ bundle exec jekyll serve --unpublished --drafts --future
```

Now we can search the site to verify if an uploaded asset is in use:

```sh
$ grep -rl "/uploads/screenshot.png" _site

```

Grep can be a little slow if you have a lot of content, so we can use [The Silver Searcher](https://geoff.greer.fm/ag/) ([GitHub](https://github.com/ggreer/the_silver_searcher)) to speed things up.

```sh
$ ag -lQ "/uploads/screenshot.png" _site

```

Of course, you won't want to search for each asset one-by-one, so let's loop through all the files in `_uploads`:

<script src="https://gist.github.com/sskylar/1008a0ab7d7aed5b75bd6f6f402b0ea6/6657b7b2a678fd9697132f534de1c84e64f864eb.js"></script>

Now we can just run:

```sh
./unused-assets.sh
```

If you have files with spaces or other special characters, you'll want to encode the filenames. Here we can use Jekyll's `URL.escape_path` to do just that:

<script src="https://gist.github.com/sskylar/1008a0ab7d7aed5b75bd6f6f402b0ea6.js"></script>

We can also add a flag to delete the unused assets:

```sh
./unused-assets.sh --delete
```

