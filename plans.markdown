---
title: Plans
subtitle: New sites start with a free 14-day trial on the Personal plan. Upgrade or downgrade anytime.
permalink: "/plans/"
layout: plans
plans:
- name: Developer
  price: 0
  description: Basic functionality for folks wanting to try siteleaf for an unlimited
    period of time.
- name: Personal
  price: 12
  discount: 0.4
  description: Gain access to site previewing, additional hosting options, support,
    and more.
- name: Team
  price: 49
  discount: 0.4
  description: Assign different user roles, increased file storage, and unlimited
    pages.
- name: Business
  price: 149
  discount: 0.4
  description: Improved build performance for complex sites and queue priority.
- name: Enterprise
  price: 299
  description: Enterprise support and a tailored build process to meet your site’s
    requirements.
details:
- name: Developer
  color: yellow
  features:
  - Publish to GitHub Pages
  - Sync and publish to **public** GitHub repos
  - Unlimited collaborators
  - GitHub sync
  - API access
  - Community support (Slack channel and docs)
- name: Personal
  color: red
  previous: Developer
  features:
  - Publish to Amazon S3, Rackspace, FTP
  - Sync and publish to **private** GitHub repos
  - Preview before publishing
  - Basic support (including email)
- name: Team
  color: purple
  previous: Personal
  features:
  - User roles (Admin, Publisher, Writer)
  - Unlimited pages
  - Increased file storage
  - Increased API limits
- name: Business
  color: green
  previous: Team
  features:
  - Priority support
  - Increased build time limit
  - Priority position in the publish queue
  - Third-party Jekyll plugins (coming soon)
  - Advanced support
- name: Enterprise
  color: blue
  previous: Business
  features:
  - Sync and publish to GitHub Enterprise
  - Scheduled publishing
  - Custom build server
  - Custom API limits
  - Dedicated support

---

