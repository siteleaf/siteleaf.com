---
title: Add SSL to your site for free
date: 2017-01-12 10:00:00 -05:00
tags:
- tip
image: "/uploads/https.png"
description: It's never been easier to jump aboard the HTTPS train and secure your
  site's traffic. We'll review our favorite options in this blog post, including CloudFront,
  Cloudflare, and Let's Encrypt.
---

![Add SSL to your site free](/uploads/https.svg)

Is your website encrypted?

Back in 2014, Google announced it would begin using [HTTPS encryption as search ranking signal](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html). If you are still serving your site over basic HTTP in 2017, you may be missing a key part in your SEO strategy.

The good news? It's never been easier to jump aboard the HTTPS train and secure your traffic.

[HTTPS](https://en.wikipedia.org/wiki/HTTP_Secure) (also known as HTTP over [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security), or Transport Layer Security) uses SSL/TLS certificates to identify your website and encrypt data in transit to your website's visitors.

Google will be pushing further with the release of Chrome 56 later this month, [announcing](https://security.googleblog.com/2016/09/moving-towards-more-secure-web.html) it will mark all non-HTTPS pages containing password and credit card input fields as "Not Secure". Eventually, Chrome plans to show a [Not Secure warning for all pages served over HTTP](https://developers.google.com/web/updates/2016/10/avoid-not-secure-warn), regardless of whether or not the page contains sensitive input fields. Here's what visitors will see in the new version:

![Treatment of HTTP pages with password or credit card form fields in Chrome 56](/uploads/chrome-https.png)

There are several ways obtain an SSL certificate for your site — many of them are completely free, and only take a few minutes to set up. Since Siteleaf supports publishing to any web host, you can choose the option that best fits your needs.

We'll review our favorites in this blog post, starting with CloudFront (which we use ourselves for this blog).



## 1. CloudFront

Amazon Web Services offers free SSL certificates using their [Certificate Manager](https://aws.amazon.com/certificate-manager/) tool which you can pair with [CloudFront](https://aws.amazon.com/cloudfront/) to handle the delivery and encryption.

AWS is an obvious choice if you are already using S3 for hosting, but it can also work nicely with GitHub Pages or any other external host. Along with HTTPS, you'll be getting a global content delivery network (CDN) to accelerate your traffic.

While the certificates are free, CloudFront does add a small cost, but its very affordable at [a few pennies per GB](https://aws.amazon.com/cloudfront/pricing/) of bandwidth. Pro users will appreciate the powerful settings to control (or disable) cache, and the ability to [automatically invalidate cached files from S3](http://www.cloudberrylab.com/blog/how-to-automatically-invalidate-dynamic-objects-in-amazon-cloudfront-using-aws-lambda/) using Lambda functions.

Here are some tutorials to get set up with HTTPS and AWS:

- [CloudFront with GitHub Pages](http://strd6.com/2016/02/github-pages-custom-domain-with-ssltls/)
- [CloudFront with Amazon S3](https://blog.webinista.com/2016/02/enable-https-cloudfront-certificate-manager-s3/index.html)
- [CloudFront with Amazon S3 (Video)](https://www.youtube.com/watch?v=5uS_rQjQ4Hw)

## 2. Cloudflare

[Cloudflare](https://www.cloudflare.com) is another strong option giving you free SSL, a global CDN, as well as advanced security features like DDoS protection. It's [completely free for personal sites](https://www.cloudflare.com/ssl/), and works with GitHub Pages, Amazon S3, and any other external host.

If you are looking for a simple, straight forward setup, Cloudflare may be the choice for you.

Here are some tutorials to get set up with HTTPS and Cloudflare:

- [Cloudflare with GitHub Pages](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/)
- [Cloudflare with Amazon S3](https://support.cloudflare.com/hc/en-us/articles/200168926-How-do-I-use-CloudFlare-with-Amazon-s-S3-Service-)

## 3. Let's Encrypt

If you publish to your own FTP or SFTP server, you can install a free SSL certificate from [Let's Encrypt](https://letsencrypt.org), an automated and open certificate authority. Like CloudFront and Cloudflare, these certificates can be set up to automatically renew, so you'll never have to worry about expiration dates.

Here are some tutorials to get set up with HTTPS and Let's Encrypt on a few popular web hosts:

- [Let's Encrypt with DreamHost](https://www.dreamhost.com/hosting/ssl-tls-certificates/)
- [Let's Encrypt with Media Temple](https://mediatemple.net/community/products/dv/208603976/install-a-let's-encrypt-ssl)
- [Let's Encrypt with DigitalOcean](https://www.digitalocean.com/community/tags/let-s-encrypt?type=tutorials)

Instructions may vary by host, so check your provider's help docs for specific details on how to install an SSL certificate.

---

Here's to a happy and secure 2017!
