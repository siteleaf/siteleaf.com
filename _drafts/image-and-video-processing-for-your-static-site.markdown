---
title: Image and video processing for your static site
date: 2016-07-05 10:16:00 -04:00
tags:
- tutorial
- aws
---

Static HTML sites are great — there’s no reliance on a server or database, you can host them for cheap, archive an entire copy on a USB drive, and when they’re properly optimized they can be blazing fast. This last part, optimization, can be tricky when it comes to static sites though. Since there’s no server processing and generating your pages, you don’t have the benefit of using something like ImageMagick alongside a gem like CarrierWave, which makes it easy to resize and optimize your images when they’re uploaded. The same goes for video. If you’re not hosting your video on YouTube or Vimeo, you’re responsible for transcoding the video into the various formats favored by the different browsers. So what’s a developer to do?

## Processing as a service

One option is to use a 3rd party. There’s been a handful of companies who have started offering image and video processing as a service. These services are a great option if you don’t want to maintain your own solution, are “on demand”, and make it really simple to get started. To name just a few:

![imgix servers](/uploads/imgix-servers.jpeg)

imgix generates your images on demand. In your image URLs you specify parameters like the dimensions, filters, face detection and type of cropping. Once the image is generated, it’s cached and served via their CDN. imgix charges $3 per “1,000 master images accessed each month” and $0.08 per GB of bandwidth.

Cloudinary offers processing services for images and video and is a bit more robust than imgix. Cloudinary offers a limited free plan with the next step up being $44/month.

Embedly, like Cloudinary, offers processing options for both images and video. They offer a limited free plan with the next step up being $23/month for video and $9/month for images.

## Rolling your own solution with AWS

What if you don’t want to pay a premium to subscribe to another service to process and serve your media? Typically you don’t need all the whiz-bang options offered by 3rd party services and a straightforward approach is typically enough for simple sites. Static sites can benefit just as much from a microservices approach as any other type of site, and if you host your site on S3, AWS gives us all the tools we need to processes our own images and video for much cheaper, though with a bit more setup and expertise required from our end.

### Open source Lambda functions

What follows is a high-level overview of the AWS services you can use to build your own image and video processing pipeline. To see working examples and more in-depth documentation, I’ve open sourced the Lambda functions I use to resize images and transcode videos. View it and fork it on GitHub.

### S3 Event Notifications

The main magic to all of this are S3 event notifications. With this you can trigger Lambda functions when new objects are published to your bucket. You can specify which directory (using the Prefix field) and which file extensions to watch for (using the Suffix field). For example, you could set up an event notification to trigger a Lambda function when any object ending with “jpg” is added to the “original/” directory.

An S3 event notification which triggers the “example-lambda-s3-image-resizer” Lambda function when a new object is added to our “original” directory and ends in “jpg”

### Lambda

Lambda is where we place the code that manages our processing logic. When a new object is added to our S3 bucket, S3 sends an event to our Lambda function with information about the object. Here’s a sample event, the only parts we care about are the object’s key and bucket name:

ImageMagick is provided in the Lambda environment without any installation required on our part, and we can use this to resize and process our images. The AWS SDK is also provided by default and we can use it to save our processed images back to S3 or to trigger an Elastic Transcoder job which handles our video processing.

### Elastic Transcoder

Elastic Transcoder transcodes videos from one format to another to be playable on various devices and browsers. For example, you could use it to convert MP4 files to WebM. AWS Lambda can create an Elastic Transcoder job for each new video object that its been notified about. In Elastic Trancoder you create a “pipeline” which specifies the input and output buckets for your media files. Optionally, you can also create a “preset” which specifies the output format, dimensions, and thumbnail options. In most cases you can just use one of the standard presets AWS provides.

### Build your own

The above was just a high-level overview of the AWS services you can use to build your own media processing pipeline. Hopefully you now have a decent mental model of how it all fits together. If you’d like to learn more, head over to GitHub to view some open source Lambda functions you can use to get started with your own media processing setup: https://github.com/sawyerh/lambda-asset-pipeline