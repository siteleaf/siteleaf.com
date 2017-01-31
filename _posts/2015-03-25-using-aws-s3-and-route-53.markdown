---
title: Using AWS S3 and Route 53
date: 2015-03-25 15:55:00 -04:00
tags:
- tutorial
- aws
hero: 
---

After building Siteleaf we took it upon ourselves to each rebuild our site using the service. I had previously used S3 with Jeykll and wanted to continue using it, but getting set up can be a bit of a mystery.

_I’m assuming that you’re using Route 53 for DNS, and want to serve content from the root domain while having www redirect to it._

### Amazon S3

Head to your [S3 Console](https://console.aws.amazon.com/s3) where you’ll make one bucket named after your root domain, and another with the www subdomain (e.g. example.com and www.example.com). Take note of the region you choose.

![s3-1](/uploads/s3-1.gif)



In the root domain (e.g. example.com) bucket, go to Properties » Static Website Hosting and check “Enable website hosting”, setting your Index document to `index.html`. Head to the Permisions tab, click “Add bucket policy”, and add the following. Be sure to replace `DOMAIN` with your root domain.

```json
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::DOMAIN/*"
        }
    ]
}
```

![s3-2](/uploads/s3-2.gif)

Now in the subdomain bucket, go to Properties » Static Website Hosting and check “Redirect all requests to another host name”, filling it in the name of your root domain. Easy.

![s3-3](/uploads/s3-3.gif)

### Route 53 and DNS

In the [Route 53 Console](https://console.aws.amazon.com/route53) create a new hosted zone for your domain if you haven’t already, and go to its Record Sets. Similarlly to the S3 buckets, you’ll want to create two new records, one for the root domain, and one for the www subdomain.

For both choose an A record, check alias, and set the alias target to the respective bucket (root to root bucket, www to www bucket). Save it, and in a few moments your domain and subdomain should point to your bucket.

![route53-1](/uploads/route53-1.gif)

### Publishing with Siteleaf

Back on your Siteleaf settings page select “Amazon S3” for publishing and enter your root domain name, Access Key/Secret Key (found under [Security Credentials](https://portal.aws.amazon.com/gp/aws/securityCredentials) in your AWS account), and bucket region. After saving you should be ready to publish.

Happy blogging.
