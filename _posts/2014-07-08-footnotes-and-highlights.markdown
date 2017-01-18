---
title: Footnotes & Highlights
date: 2014-07-08 10:00:00 -04:00
tags:
- tip
- markdown
hero: 
---

In addition to the [Markdown basics](http://daringfireball.net/projects/markdown/syntax), Siteleaf supports some advanced syntax to make formatting your content easier. Here is a sentence showing off a <mark>highlight</mark> and also a footnote[^1].

[^1]: This is a footnote in Siteleaf!

Footnotes are great for citing and referencing sources, or for expanding on ideas. They are created like this:

~~~
A cool sentence[^1].

[﻿^1]: A cool footnote.
~~~


And rendered like this:

~~~html
<p>A cool sentence<sup id="fnref1">
    <a href="#fn1" rel="footnote">1</a>
</sup>.</p>
<div class="footnotes">
    <hr>
    <ol>
        <li id="fn1">
            <p>A cool footnote. <a href="#fnref1" rev="footnote">↩</a></p>
        </li>
    </ol>
</div>
~~~

Highlighting is useful when you'd like to direct the readers attention somewhere specific. To use it, wrap a phrase in `==double equal signs==`. Highlights simply get wrapped in `<mark>` tags. And remember, “with great power comes great responsibility.”
