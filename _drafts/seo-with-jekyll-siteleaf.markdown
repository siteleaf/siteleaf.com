---
title: SEO with Jekyll and Siteleaf
date: 2018-02-09 14:26:00 -05:00
tags:
- jekyll
- tip
image: "/uploads/siteLeaf_seo_blogCover_020818-04.jpg"
description: We have had some requests recently for a blog post about SEO on Siteleaf,
  and we are here to deliver.
---

![](/uploads/siteLeaf_seo_blogCover_020818-04.jpg)

SEO (Search Engine Optimization) helps your website stand a chance of appearing in search engine results and get people organically discovering your site.

Here are four essential SEO optimizations you should consider adding to your Siteleaf site:

* [Sitemap](/seo-on-siteleaf/#sitemap)
* [Structured URLs](/seo-on-siteleaf/#structured-urls)
* [Jekyll-SEO-Tag](/seo-on-siteleaf/#jekyll-seo-tag)
* [Sharing Debugger](/seo-on-siteleaf/#sharing-debugger)

To more fully understand SEO check out this [guide from Moz](https://moz.com/beginners-guide-to-seo) and [Google’s starter guide](http://static.googleusercontent.com/media/www.google.com/en/us/webmasters/docs/search-engine-optimization-starter-guide.pdf).

## Sitemap

[Sitemaps](https://learn.siteleaf.com/themes/sitemaps-and-feeds/) can help search engines find information and content on your site, especially if your website is particularly large. Sitemaps can be generated with a whitelisted Jekyll plugin [`jekyll-sitemap`](https://github.com/jekyll/jekyll-sitemap).

To enable the `Jekyll-Sitemap` plugin add the following to your site’s Gemfile:

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

In Siteleaf you can edit your page’s or post’s URL slug, which is a great way to encourage users to click on your site - as well as being necessary for SEO. Google [recommends](https://static.googleusercontent.com/media/www.google.com/en//insidesearch/howsearchworks/assets/searchqualityevaluatorguidelines.pdf) using descriptive keywords in the URL because crawlers and users alike can tell what content the site is going to include. For example:

A 'semantically accurate' URL accurately describes its destination. This is a semantically accurate URL: __https://rogertheracoon.com/tips/winter-menu__

This is just a confusing mess: __https://rogertheracoon.com/880jdufl__

With a semantically accurate URL if, for whatever reason, the title of this page didn’t display a human person could read the URL and would be able to guess the page’s content. This knowledge will encourage them to click on the link, instead of scaring them away with an array of letters they don’t understand.

Structured URLs are also useful when users share your website across social media networks or online forums that don’t display your [website’s anchor text](https://moz.com/learn/seo/anchor-text). Just like when users are clicking on your link in a search, you’re giving potential viewers an expectation as to what they’re would see if they click on your link.

URLs are a minor ranking factor for SEO, so while using a URL rich in keywords can improve your site’s visibility on their own structured URLs don’t have a significant impact on getting to the top of Google.

![artem-sapegin-180146.jpg](/uploads/artem-sapegin-180146.jpg)

## Jekyll-SEO-Tag

We love the [`Jekyll-SEO-Tag`](https://github.com/jekyll/jekyll-seo-tag) plugin. It’s [whitelisted](https://learn.siteleaf.com/themes/jekyll-plugins/#whitelisted-plugins) by GitHub Pages so you can use it on any of our plans. Using the `Jekyll-SEO-Tag` plugin helps to optimize your website for search engines and social media networks by adding metadata tags to index and display your site's content.

`Jekyll-SEO-Tag` adds the following metadata tags to your site:

* Page title, with site title or description appended
* Page description
* Canonical URL
* Next and previous URLs on paginated pages
* [JSON-LD Site and post metadata](https://developers.google.com/structured-data/) for richer indexing
* [Open Graph](http://ogp.me/) title, description, site title, and URL (for Facebook, LinkedIn, etc.)
* [Twitter Summary Card](https://dev.twitter.com/cards/overview) metadata

The `Jekyll-SEO-Tag` plugin works for most websites with only a few steps. I recommend reading this [blog post](https://blog.webjeda.com/optimize-jekyll-seo) from 2016 to understand precisely what the `Jekyll-SEO-Tag` plugin is doing for you.

### Setting up the Jekyll-SEO-Tag plugin

To enable the `Jekyll-SEO-Tag` plugin add the following to your site’s `Gemfile`:

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
    
### Using the Jekyll-SEO-Tag plugin
The `Jekyll-SEO-Tag` plugin will include any of the following list if included in your site's `_config.yml`. We recommend inputting as many of these as you want when you’re setting up the `Jekyll-SEO-Tag` plugin. 
    
* `title` - your website's title (e.g., Racoon’s Website, Fox’s Blog, etc.)
* `description` - a short description of your website (e.g., A website featuring gifts for owl lovers)
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
    - https://www.linkedin.com/in/rogertheracoon
```
    
Use `google_site_verification` for verifying ownership via Google webmaster tools, or you can verify ownership with several services at once by inputting:  
    
```yaml
  webmaster_verifications:
    google: 987654321
    bing: 987654321
    alexa: 987654321
```
    
Hats off to [Ben Balter](https://github.com/benbalter) and the open source contributors who made the [`Jekyll-SEO-Tag`](https://github.com/jekyll/jekyll-seo-tag) plugin a reality!
    
## Review your SEO

You can see how your site will look when shared using Facebook’s handy [Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/):

![Screen Shot of Siteleaf on Facebook Sharing Debugger](/uploads/Screen%20Shot%202018-02-09%20at%2015.55.08.png)

Or with Twitter's [Card Validator](https://cards-dev.twitter.com/validator):

![Screen Shot of Siteleaf on Twitter's Card Validator](/uploads/Screen%20Shot%202018-02-13%20at%2013.29.37.png)

These work by scraping your website and showing you the information that it has generated from your SEO metadata. Facebook's Sharing Debugger will also tell you if there are any missing SEO types that you could include in the future.
    
If you are redesigning or adding a bunch of new content to your site, it’s worthwhile running your site through either of these to check that the `Jekyll-SEO-Tag` plugin is working as you expect. 
    
Facebook doesn’t scrape for new content on URLs automatically. So, it’s good practice to manually scrape your site using their debugger, to ensure your new content is featured when people share your website. Otherwise, Facebook will hold onto your all of your old imagery and description forever. Running your site through the debugger will ensure that when your Aunt Shelly shares your new blog post, it will display your most recent photographs, and not those terrible selfies from last year. 
    
---
    
<small>We have had some requests recently for a blog post about SEO on Siteleaf, and we are here to deliver. Is there something you would love for us to cover on the blog? Let us [know](https://twitter.com/siteleaf)! 
    
<small>If you have any questions about SEO on Siteleaf get in touch with us on [twitter](https://twitter.com/siteleaf) & chat with the [Siteleaf community](http://chat.siteleaf.com/) on Slack. 