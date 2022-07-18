# Admin dashboard

**_[View the site](https://piotrnajda3000.github.io/admin-dashboard/)_**

[Project brief](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-admin-dashboard)

## Dev diary

In the `Header` component, I wanted to hide `profileInfoVertical` at a certain breakpoint, however `profileInfoVertical` comes from the `ProfileInfo.module.scss`, so I couldn't access it from the `Header.module.scss`.

As a temporary fix, I've set the `profileInfoVertical` class to be global, so I could access it in the globlal scope inside `Header.module.scss`.

Responsiveness with SCSS Modules is not yet clear to me.

I use SCSS Mixins to handle media queries.

For now, when I need to add a certain item at a certain breakpoint, I add a SCSS Module class name to it. No classname means it's for fullscreen, since that doesn't need a breakpoint.

Behaviour seems to be similar across components:

1. Don't display items with a certain breakpoint classname, until screen reaches that size
2. When it reaches that size, `display: revert` them.

## Some gratitude

- Figma's "Tripma" project for `box-shadow` elevation variants
- Adobe Color wheel for generating the color palette
- Hopper's painting for my avatar
