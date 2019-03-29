---
title: How to check your site for broken links
date: 2019-03-28 11:06:00 -04:00
tags:
- jekyll
- tip
image: "/uploads/jekyll-tip-2.png"
description: 'Clicking on links that are broken is a bad experience for users, and
  it can even affect your [SEO](https://www.siteleaf.com/blog/seo-with-jekyll-siteleaf/).
  Thankfully, it’s really easy to automate the process of checking the links on your
  site using `html-proofer`. '
---

![jekyll tip](/uploads/jekyll-tip-2.png)

Clicking on links that are broken is a bad experience for users, and it can even affect your [SEO](https://www.siteleaf.com/blog/seo-with-jekyll-siteleaf/). Thankfully, it’s really easy to automate the process of checking the links on your site using `html-proofer`. 

You can install `html-proofer` however you like, for the sake of argument we’ll use `bundle` by adding the following to your `gemfile`:

```sh
gem 'rake'
gem 'html-proofer'
```

And then run `bundle install`. Then you can get `html-proofer` to check for any broken links using the following commands:

```sh
bundle exec jekyll build
bundle exec htmlproofer ./_site`
```

Then you’ll receive a breakdown of every external and internal link which is broken. Go forth and fix things! Hat's off to Super Tech Crew for this tip. 

![sites-we-like-1.png](/uploads/sites-we-like-1.png)

[Am I A Real Developer?](http://amiarealdeveloper.com/)
A quiz about being a ‘real’ developer no matter what language or tools you use.

[The Creative Independent](https://thecreativeindependent.com/)
Emo­tional and prac­ti­cal guid­ance for cre­ative peo­ple — their archive is gold.
Built with Siteleaf
 
[Eat Genesis](https://eatgenesis.com/)
Plant-based alchemy restaurant giving us retro cinema vibes and fun animations.

[Girls' Night In Club](http://girlsnightinclub.com/)
A newsletter for women that would rather stay in tonight full of ace recs & reads.
Built with Siteleaf

[Lesa](https://lesarestaurant.com.au/)
Australian restaurant with cool interactions and a simple color palette on their site. 