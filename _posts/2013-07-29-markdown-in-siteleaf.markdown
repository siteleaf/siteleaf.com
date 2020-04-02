---
title: Markdown in Siteleaf
date: 2013-07-29 11:01:00 -04:00
tags:
- tutorial
- markdown
- v1
hero: "/uploads/markdown-in-siteleaf-ui.png"
---

In the last [Siteleaf](/) post, we explored [taxonomy](/blog/taxonomy-in-siteleaf) and the many ways you could use it to extend your website. This time, we’ll break from templating and take a closer look at content—specifically, Markdown’s role in Siteleaf.

### Markdown

If you develop for the web and haven’t heard of [Markdown](http://daringfireball.net/projects/markdown/) yet, I’m going to have to ask you to leave. As described by its originator, [John Gruber](http://daringfireball.net), “Markdown is a text-to-HTML conversion tool for web writers.” With it, we can write a blog post, like this one, and style it without touching HTML. Instead of typing `<strong>bold</strong>` for a selection of text we’d like to bold, we can type `**bold**` and use a Markdown engine to produce the proper HTML syntax. This allows for more legible text when writing, so we don’t lose track of the actual words.

Along with styling, we can also use Markdown for more complex elements, like links: `[alt text](http://mylink.com)`, and images: `![alt text](/myimage.jpg)`. Under the hood, Siteleaf uses [Redcarpet](https://github.com/vmg/redcarpet), a widely-adopted Markdown engine, and [SmartyPants](http://daringfireball.net/projects/smartypants/), a plugin for automatic smart quotes and other fancy characters. With these libraries, we get a few extra shortcuts for free, like em dashes: `---`, ellipsis: `...`, and tables:

```markdown
| First name | Last name   | Age |
| ---------- | ----------- | --- |
| Jonnie     | Hallman     | 26  |
| Larry      | Fox         | 15  |
| Sawyer     | Hollenshead | 14  |
```

With the support of Markdown, Siteleaf posts can follow our guiding principle—all content should outlive its CMS. No matter where you manage your website, you should be able to take your content with you, free from any ties to the previous system.


### The editor

![editor-text](/uploads/markdown-in-siteleaf-editor-text.jpg)

So, how does Markdown fit into Siteleaf on the front-end? For starters, Siteleaf renders all body text using Markdown by default. Gone are the days of the WYSIWYG editor, with its stored HTML and toolbar of endless icons. Siteleaf’s editor is built on [Ace](http://ace.c9.io/), so we can see proper Markdown highlighting, and the editor behaves like a real text editor—tabs actually work as expected. It does have a few icons for the mouse-dependent folk, but reduced down to the greatest hits—*bold*, *insert link*, and *insert image*. To the left of the icons is a link for easily referencing the Markdown syntax.

![reference](/uploads/markdown-in-siteleaf-reference.jpg)

Clicking the link prompts a modal, so you can see how to insert an image without scrubbing through Gruber’s 2004 documentation. With Siteleaf, however, you should never find yourself looking for the image syntax because it handles this for you.

### Image handling

In [Jekyll](http://jekyllrb.com), I always dreaded adding images to posts because the process was so labor-intensive. Even though I wrote scripts to alleviate some of the pain, I still needed to write the entire path to the image. Luckily, Siteleaf takes care of this for us.

![drag-image](/uploads/markdown-in-siteleaf-drag-image.jpg)

When using the *insert image* icon to upload a photo, Siteleaf will automatically paste the Markdown code to the location of your cursor in the editor. In addition, you can drag any of your existing assets to the text editor and Siteleaf will insert the image’s code. This seems like such an easy and obvious feature, but knowing life without it makes me appreciate it even more.

![hover-image](/uploads/markdown-in-siteleaf-hover-image.jpg)

Without a WYSIWYG editor, images are sometimes difficult to visualize unless you preview the entire page or provide a descriptive filename. Because of this, we built *image preview on hover* into Siteleaf’s editor. If you need to reference an image, simply mouse over its URL and a thumbnail will appear. We sacrificed an intern to a coven of witches in return for this feature.

### Write locally

![iawriter](/uploads/markdown-in-siteleaf-iawriter.jpg)

Because Siteleaf loves Markdown so much, it doesn’t care where you write your posts. If you prefer writing deep in the woods, using the ever popular [iA Writer](http://www.iawriter.com/mac/) as your weapon of choice, feel free. You should be able to write in whatever environment you feel most comfortable.

![drag-file](/uploads/markdown-in-siteleaf-drag-file.png)

When you’re ready to publish, simply drag and drop the Markdown file to Siteleaf’s editor. Siteleaf will insert the file’s contents into the editor and you’re good to go. If you’re feeling l33t and want to automate this workflow, you could write a script using the [Siteleaf API](https://github.com/siteleaf/siteleaf-api/) to update a post’s contents upon saving a file locally.

### Wrapping up

It’s safe to say that Markdown is a proven markup language for writing on the web. I might go as far as to consider Markdown a safer, more future-ready writing format than HTML. We placed our bets by integrating it heavily into Siteleaf, believing that its simplicity and light weight go hand-in-hand with our UI. Do you have the itch to write?—try using Siteleaf with Markdown and [let me know](http://twitter.com/siteleaf) what you think.
