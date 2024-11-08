# Next-shadcn-Redux Template

This is a boilerplate template for creating a [Next.js](https://nextjs.org) project with [shadcn/ui](https://ui.shadcn.com/) and [Redux](https://redux.js.org/). It includes a basic authentication / authorisation flow, involving:

- Login functionality / UI
- Validation of form fields
- Server actions to handle login / logout
- Cookie based sessions
- A data access layer to verify sessions and handle requests

In addition, a Next compatible redux store has been configured, with simple 'counter' client component as an illustration of its usage. 

*Note: the `--legacy-peer-deps` flag may be required to install dependencies due to the use of the React 19 release candidate version*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## References

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [shadcn/ui Documentation](https://ui.shadcn.com/) - component library documentation and how to integrate with Next 15 etc.
- [Next.js Auth Guide](https://nextjs.org/docs/app/building-your-application/authentication#2-encrypting-and-decrypting-sessions) - guide followed for the majority of this template.
- [Redux Toolkit Next Integration](https://redux.js.org/usage/nextjs) - guide for integrating Redux with a Next application and some of the issues that may arise