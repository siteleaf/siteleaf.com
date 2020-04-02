---
title: Publishing via the API
date: 2015-06-24 11:10:00 -04:00
tags:
- announcement
- tutorial
- v1
hero: 
---

For the last week publishing in the Siteleaf interface has been powered by our API. This has been a requested feature by some of our users and ourselves. Its behavior is bit different than some of our other API endpoints, so let's go over it.

To initiate a publish, make an authenticated `POST` request to the `/sites/:id/publish` endpoint.

~~~bash
$ curl -u "$API_KEY:$API_SECRET" -X POST \
  https://api.siteleaf.com/v1/sites/$SITE_ID/publish

{"job_id":"e79af12c79ccd8866902d3dd"} 
~~~

This triggers a publish and immediately returns a job ID (or returns an already running job ID if one exists). You can stop here if you'd like and Siteleaf will happily chug away in the background. 

But the fun doesn't stop there. You can optionally check in on publish progress using your `job_id` from above by making an authenticated `GET` request to the new `/jobs/:id` endpoint.


~~~bash
$ curl -u "$API_KEY:$API_SECRET" \
  https://api.siteleaf.com/api/v1/jobs/e79af12c79ccd8866902d3dd

event:publish
data:{"status":"working","message":"Checking... /home","updated_at":"1435159120"}

[etc…]

event:publish
data:{"status":"complete","message":"Published","updated_at":"1435159121"}
~~~

This endpoint, unlike our others, consistently returns [Server Sent Events](https://en.wikipedia.org/wiki/Server-sent_events) (SSE) instead of JSON documents (including  errors). The `data` field is JSON encoded however. SSE is supported in all modern browsers and there are client libraries in a number of programming languages. 

Additionally, job ID's are kept for at least 30 minutes after completion so you can check in on a publish immediately or wait a bit.

Can't wait to see what uses you come up with!

### Publishing from the gem

First install the latest gem ([`0.9.23`](https://rubygems.org/gems/siteleaf) as of writing)

~~~bash
$ gem install siteleaf
~~~

And then…

~~~bash
$ siteleaf publish
Fetching inventory...
Compiling...
[etc…]
Published
=> Publish completed.
~~~

Or if you don't care about progress, you can use either of the following:

~~~bash
$ siteleaf publish -q
$ siteleaf publish --quiet

=> Publish queued.
~~~

🎉🎉
