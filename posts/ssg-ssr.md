---
title: "When to Use Static Generation vs Server-side Rendering"
date: "2020-01-02"
---

We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it must faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listing
- Help and documentation

We can ask ourselves: "Can we pre-render this page **ahead** of a user's request?  If the answer is yes, then we should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a users's request.  Maybe the page shows frequently updated data, and the page content changes on every request.

In that case, we can use **Server-Side Rendering**.  It will be slower, but the pre-rendered page will always be up-to-date.  Or you can skip pre-rendering and use client-side JavaScript to populate data.
