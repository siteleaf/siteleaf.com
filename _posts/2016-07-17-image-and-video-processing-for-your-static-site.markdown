---
title: Image and video processing for your static site
date: 2016-07-17 10:16:00 -04:00
tags:
- tutorial
- aws
image: "/uploads/media-processing-diagram.png"
description: Static sites can benefit from microservices just as much as any other
  type of site, especially when it comes to processing images and video.
---

Static HTML sites are great — there’s no reliance on a server or database, you can host them for cheap, archive an entire copy on a USB drive, and when they’re properly optimized they can be blazing fast. Optimization can be tricky when it comes to static sites though. Since there’s no server processing and generating your pages, you don’t have the benefit of using something like [ImageMagick](http://www.imagemagick.org/) alongside a gem like CarrierWave, which makes it easy to resize and optimize your images when they’re uploaded. The same goes for video. If you’re not hosting your video on YouTube or Vimeo, you’re responsible for transcoding the video into the various formats favored by the different browsers. So what’s a developer to do?

## Processing as a service

One option is to use a 3rd party. There’s been a handful of companies who have started offering image and video processing as a service. These services are a great option if you don’t want to maintain your own solution, are “on demand”, and make it really simple to get started. To name just a few:

![imgix servers](/uploads/imgix-servers.jpeg)

**[imgix](http://imgix.com/)** generates your images on demand. In your image URLs you specify parameters like the dimensions, filters, face detection and type of cropping. Once the image is generated, it’s cached and served via their CDN. imgix charges $3 per “1,000 master images accessed each month” and $0.08 per GB of bandwidth.

**[Cloudinary](http://cloudinary.com/)** offers processing services for images and video and is a bit more robust than imgix. Cloudinary offers a limited free plan with the next step up being $44/month.

**[Embedly](http://embed.ly/)**, like Cloudinary, offers processing options for both images and video. They offer a limited free plan with the next step up being $23/month for video and $9/month for images.

**[Filestack](https://www.filestack.com/)** is another. In addition to processing images and video, they offer document transformations and URL screenshots. They offer a limited free plan with the next step up being $49/month.

## Rolling your own solution with AWS

What if you don’t want to pay a premium to subscribe to another service to process and serve your media? Typically you don’t need all the whiz-bang options offered by 3rd party services and a straightforward approach is typically enough for simple sites. Static sites can benefit just as much from a microservices approach as any other type of site, and if you host your site on S3, AWS gives us all the tools we need to processes our own images and video for much cheaper, though with a bit more setup and expertise required from our end.


![media-processing-diagram.png](/uploads/media-processing-diagram.png)

### Open source Lambda functions

What follows is a high-level overview of the AWS services you can use to build your own image and video processing pipeline. To dive into the code, view working examples and more in-depth documentation, you can [view all the open source code on GitHub](https://github.com/sawyerh/lambda-asset-pipeline).

### S3 Event Notifications

The main magic to all of this are [S3 event notifications](https://docs.aws.amazon.com/en_us/console/s3/events). With this you can trigger Lambda functions when new objects are published to your bucket. You can specify which directory (using the Prefix field) and which file extensions to watch for (using the Suffix field). For example, you could set up an event notification to trigger a Lambda function when any object ending with `jpg` is added to the `original/` directory.

![s3-event-notification.png](/uploads/s3-event-notification.png)

### Lambda

[Lambda](https://aws.amazon.com/lambda/) is where we place the code that manages our processing logic. When a new object is added to our S3 bucket, S3 sends an event to our Lambda function with information about the object. Here’s a sample event, the only parts we care about are the object’s key and bucket name:

```json
{
  "Records": [
    {
      "eventVersion": "2.0",
      "eventTime": "1970-01-01T00:00:00.000Z",
      "requestParameters": {
        "sourceIPAddress": "127.0.0.1"
      },
      "s3": {
        "configurationId": "testConfigRule",
        "object": {
          "eTag": "0123456789abcdef0123456789abcdef",
          "sequencer": "0A1B2C3D4E5F678901",
          "key": "HappyFace.jpg",
          "size": 1024
        },
        "bucket": {
          "arn": "arn:aws:s3:::mybucket",
          "name": "sourcebucket",
          "ownerIdentity": {
            "principalId": "EXAMPLE"
          }
        },
        "s3SchemaVersion": "1.0"
      },
      "responseElements": {
        "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH",
        "x-amz-request-id": "EXAMPLE123456789"
      },
      "awsRegion": "us-east-1",
      "eventName": "ObjectCreated:Put",
      "userIdentity": {
        "principalId": "EXAMPLE"
      },
      "eventSource": "aws:s3"
    }
  ]
}
```

ImageMagick is provided in the Lambda environment without any installation required on our part, and we can use this to resize and process our images. The AWS SDK is also provided by default and we can use it to save our processed images back to S3 or to trigger an Elastic Transcoder job which handles our video processing.

### Elastic Transcoder

[Elastic Transcoder](https://aws.amazon.com/elastictranscoder/) transcodes videos from one format to another to be playable on various devices and browsers. For example, you could use it to convert MP4 files to WebM. AWS Lambda can create an Elastic Transcoder job for each new video object that its been notified about. In Elastic Trancoder you create a “pipeline” which specifies the input and output buckets for your media files. Optionally, you can also create a “preset” which specifies the output format, dimensions, and thumbnail options. In most cases you can just use one of the standard presets AWS provides.

### Build your own

The above was just a high-level overview of the AWS services you can use to build your own media processing pipeline. Hopefully you now have a decent mental model of how theses pieces fit together. If you’d like to learn more, head over to GitHub to view some open source Lambda functions which you can use to get started with your own media processing setup: [github.com/sawyerh/lambda-asset-pipeline](https://github.com/sawyerh/lambda-asset-pipeline)