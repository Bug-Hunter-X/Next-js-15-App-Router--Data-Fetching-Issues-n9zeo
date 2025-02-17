# Next.js 15 App Router Data Fetching Issues

This repository demonstrates a common issue encountered when using data fetching methods like `getServerSideProps`, `getStaticProps`, and `getStaticPaths` within the Next.js 15 App Router.

## Problem

When using these data fetching methods in an App Router Page, the data may not be correctly passed to the component. This can lead to unexpected errors or missing data. This is due to the differences in how data fetching works in the App Router compared to the Pages Router.

## Solution

The solution is to use the new `fetch` method provided by the App Router. This ensures that the data is fetched correctly within the component. We should use layout.js instead of app.js for the pages.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the console output and the rendered page.

## Related Issues

* [Next.js issue tracker](https://github.com/vercel/next.js/issues)
