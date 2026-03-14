---
title: "Building pages with Cozalt components"
excerpt: "Learn how to build pages with Cozalt components"
featuredImage: "./images/building-pages.jpg"
publishDate: "2025-02-22"
publish: true
categories: ["Theme Usage"]

seo:
  title: "How to build pages with Cozalt components"
  description: "Learn how to build pages with Cozalt components"
  image: "./images/building-pages.jpg"
---

## Cozalt Components

Cozalt components are a set of components that are used to build pages. They are a collection of components that are used to build pages.

## List of Cozalt Page Components

- components/sections/Faqs.astro
- components/sections/CtaBanner.astro
- components/sections/Logos.astro
- components/sections/SplitPanel.astro
- components/sections/Stats.astro

## How to use Cozalt components

To use a Cozalt component, you need to import the component into your page.

```javascript
---
import { SplitPanel } from "@cozalt/components";
---
```

After importing the component, create a new `const` object that contains the data for the component.

```javascript
const aboutSection = {
    eyebrow: "About",
    headline: "About Cozalt",
    subheadline: "We are a team of developers who are passionate about building amazing websites with ease.",
    description: "Our platform is designed to help developers and agencies build amazing websites with ease. Packed with features and optimized for performance.",
    image: {
        src: "/home/about.jpg",
        alt: "Featured image"
    },
    buttons: [
        {
            text: "Get Started",
            link: "/contact",
            variant: "primary" as const
        },
        {
            text: "Learn More",
            link: "/about",
            variant: "secondary" as const
        }
    ]
}
```

When this is created we can then add this within the `<Layout>` component.

```javascript
<Layout>
    <SplitPanel content={aboutSection} imagePosition="right" background="light" padding="base" />
</Layout>
```
