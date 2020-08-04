---
title: SEO with Jekyll and Siteleaf
date: 2018-02-13 16:54:00 -05:00
tags:
- jekyll
- tip
image: "/uploads/siteLeaf_seo_blogCover_020818-04.jpg"
description: We have had some requests recently for a blog post about SEO on Siteleaf,
  and we are here to deliver.
---

![](/uploads/siteLeaf_seo_blogCover_020818-04.jpg)

SEO (Search Engine Optimization) helps your website stand a chance of appearing in search engine results and get people organically discovering your site.

Here are our top tips to consider when optimizing your Siteleaf site's SEO:

* [Sitemap](#sitemap)
* [Structured URLs](#structured-urls)
* [Jekyll-SEO-Tag](#jekyll-seo-tag)
* [Optimize for Sharing](#optimize-for-sharing)
* [Write with SEO in mind](#write-with-seo-in-mind)

## Sitemap

[Sitemaps](https://learn.siteleaf.com/themes/sitemaps-and-feeds/) can help search engines find information and content on your site, especially if your website is particularly big. Sitemaps can be generated with a whitelisted Jekyll plugin [`jekyll-sitemap`](https://github.com/jekyll/jekyll-sitemap).

To enable the `jekyll-sitemap` plugin add the following to your site’s Gemfile:

```sh
gem 'jekyll-sitemap'
```
    
And run `bundle`. Then add this to your site's `_config.yml` file:
    
```yaml
url: "http://example.com" # the hostname & protocol for site
plugins:
   - jekyll-sitemap
```

Save, publish, and you’re done! This will automatically create a `/sitemap.xml` for you.



## Structured URLs

In Siteleaf you can edit your page’s or post’s URL slug, which is a great way to encourage users to view your site, as well as being necessary for SEO. Google [recommends](https://static.googleusercontent.com/media/www.google.com/en//insidesearch/howsearchworks/assets/searchqualityevaluatorguidelines.pdf) using descriptive keywords in the URL because crawlers and users alike can tell what content the site is going to include. 

For example:

A 'semantically accurate' URL accurately describes the destination of the URL. This is a semantically accurate URL: __https://rogertheracoon.com/tips/winter-menu__

This is just a confusing mess: __https://rogertheracoon.com/880jdufl__

With a semantically accurate URL if, for whatever reason, the title of this page didn’t display a human person could read the URL and would be able to guess the page’s content. This knowledge will encourage them to click on the link, instead of scaring them away with an array of letters and numbers they don’t understand.

Structured URLs are useful when users share your website across social media networks or online forums that don’t display your [website’s anchor text](https://moz.com/learn/seo/anchor-text).

URLs are a minor ranking factor for SEO, so while using a URL rich in keywords can improve your site’s visibility, on their own structured URLs don’t have a significant impact on getting to the top of Google.

![artem-sapegin-180146.jpg](/uploads/artem-sapegin-180146.jpg)

## Jekyll-SEO-Tag

We love the [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag) plugin. It’s [whitelisted](https://learn.siteleaf.com/themes/jekyll-plugins/#whitelisted-plugins) by GitHub Pages so you can use it on any of our plans. Using the `jekyll-seo-tag` plugin helps to optimize your website for search engines and social media networks by adding metadata tags to index and display your site's content.

`jekyll-seo-tag` adds the following metadata tags to your site:

* Page title, with site title or description appended
* Page description
* Canonical URL
* Next and previous URLs on paginated pages
* [JSON-LD Site and post metadata](https://developers.google.com/structured-data/) for richer indexing
* [Open Graph](http://ogp.me/) title, description, site title, and URL (for Facebook, LinkedIn, etc.)
* [Twitter Summary Card](https://dev.twitter.com/cards/overview) metadata

The `jekyll-seo-tag` plugin works for most websites with only a few steps. I recommend reading this [blog post](https://blog.webjeda.com/optimize-jekyll-seo) from 2016 to understand precisely what the `jekyll-seo-tag` plugin is doing for you.

### Setting up the jekyll-seo-tag plugin

To enable the `jekyll-seo-tag` plugin add the following to your site’s `Gemfile`:

```sh
gem 'jekyll-seo-tag'
```
    
And then add this to your site's `_config.yml` file:
    
```yaml
plugins:
   - jekyll-seo-tag
```
    
And finally add this right before `</head>` in your site's template:
    
{% raw %}
  ```liquid
{% seo %}
  ```
{% endraw %}
    
### Using the jekyll-seo-tag plugin
The `jekyll-seo-tag` plugin will include any of the following list if included in your site's `_config.yml`.
    
* `title` - your website's title (e.g., Racoon’s Website, Fox’s Blog). Google will only display the first 50-60 characters of a title, so be precise.
* `description` - a short description of your website (e.g., A website featuring gifts for owl lovers). This appears below the title in a search result. You need to entice someone to click on your link in less than 320 characters.
* `url` - the full URL of your site
* `author` - global author information 
* `logo` - URL to a site-wide logo (e.g., /assets/fox-selfie.png)
    
You can add your site's Twitter handle by inputting:
    
```yaml
twitter: 
  username: rogertheracoon
```
    
For Facebook you can use the following properties:
* `facebook:app_id` - a Facebook app ID for Facebook insights
* `facebook:publisher` - a Facebook page URL or ID of the publishing entity
* `facebook:admins` - a Facebook user ID for domain insights linked to a personal account
    
You can add one or more of these properties by inputting:  
    
```yaml
facebook:
  app_id: 987654321
  publisher: 987654321   
  admins: 987654321
```
    
You can [specify social profiles](https://developers.google.com/search/docs/data-types/social-profile) using `social`: 
* `name` - If the user or organization name differs from the site's name
* `links` - An array of links to social media profiles.

You can add one or more of these properties by inputting:  

```yaml
social:
  name: Roger the Racoon
  links:
    - https://twitter.com/rogertheracoon
    - https://www.instagram/rogerracoon
    - https://www.facebook.com/roger.racoon
```
    
Use `google_site_verification` for verifying ownership via Google webmaster tools, or you can verify ownership with several services at once by inputting:  
    
```yaml
  webmaster_verifications:
    google: 987654321
    bing: 987654321
    alexa: 987654321
```
    
Hats off to [Ben Balter](https://github.com/benbalter) and the open source contributors who made the [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag) plugin a reality!
    
## Optimize for sharing

![Screen Shot of Siteleaf on Facebook Sharing Debugger](/uploads/Screen%20Shot%202018-02-09%20at%2015.55.08.png)

You can see how your site will look when shared using Facebook’s [Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/) or with Twitter's [Card Validator](https://cards-dev.twitter.com/validator).

These work by scraping your website and presenting you the information that it has generated from your SEO metadata. Facebook's Sharing Debugger will also tell you if there are any missing SEO types that you could include in the future.
    
If you are redesigning or adding a bunch of new content to your site, it’s worthwhile running your site through these to check that the `jekyll-seo-tag` plugin is working as you expect. 
    
Facebook doesn’t automatically scrape for new content on URLs. It’s good practice to manually scrape your site using their debugger, to ensure your new content is featured when people share your website. Running your site through the debugger will ensure that when your Aunt Shelly shares your new blog post, it will display your most recent photographs, and not those terrible selfies from last year. 

## Write with SEO in mind

![Image of journal saying 'write ideas'](/uploads/write-ideas.jpg)

### Be knowledgeable
You want people to come to your site? There needs to be something on there worth reading! Do your research. Informative content that utilizes keywords and common phrases will help web crawlers find the content and drive audiences to you. 

### Be approachable
Look at what other people are writing in your field and take note of their tone. A lab and a bakery might both be concerned with the properties of yeast. But the audience looking for a scientific investigation of yeast production is *very* different to those who just want to pick up some damn tasty bread. 

![Image of hands on a keyboard](/uploads/Hands-on-keyboard.jpg)

### Be clear 
Don't write mysterious headlines. Web crawlers look at headings to scan your content and categorize your page. Don't make people work for the information they're looking for. Otherwise, they'll end up frustrated and leave your website. 

### Be keyword aware
Using a variety of keywords and phrases is great for SEO. If you've done your research adding these keywords should be a breeze.

Ensure that your keywords are included in a way that still feels natural for real people reading your posts. Don't neglect to use long-tail keywords; these short phrases will help to precisely target your audience. 

You can use [Google Adwords Keywords Planner](https://adwords.google.com/home/tools/keyword-planner) as a way of finding alternative words or phrases, so you're not repeating yourself again, and again, and again.

![neon-heart.jpg](/uploads/neon-heart.jpg)

### Be generous
Don't be afraid to direct people to other sites that will help inform their research. Some still believe that you should only link within your website and that every external link provides your audience an opportunity to stop engaging with your content. But if your content is interesting and informative, there's no reason you're audience won't come back to you, especially if you set up your external links to open in a new tab. 

There are lots of talented and dedicated people writing online. When you link to them you're building everyone up. Don't underestimate the power of engaging and rewarding your community. 

Consistently linking to great content is a way of putting a stamp of quality on your site. Spammy sites tend to link to a far more significant percentage of junk, while great sites typically link to other great sites.  

![you-got-this.jpg](/uploads/you-got-this.jpg)
    
---
    
<small>We have had some requests recently for a blog post about SEO on Siteleaf, and we are here to deliver. Is there something you would love for us to cover on the blog? Let us [know](https://twitter.com/siteleaf)! 
    
<small>If you have any questions about SEO on Siteleaf get in touch with us on [twitter](https://twitter.com/siteleaf) & chat with the [Siteleaf community](https://chat.siteleaf.com/) on Slack. 
