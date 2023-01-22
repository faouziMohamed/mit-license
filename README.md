# MIT License web Template
<p align="center">
  <img src="public/images/mit.png" alt="MIT Logo" width="200"/>
</p>
<p align="center">Host your own license for your open source projects. </p>

## Features

Usage of query parameters to prefill the license template.

There are only two parameters: `holder` and `year`.

- The `holder` parameter is used to prefill the name field.
  - If the `holder` parameter is not set, the default value is the name defined in the `.env` file.
  - If however the value is not set in the `.env` file, the default value is `<COPYRIGHT HOLDER>`.
- The `year` parameter is used to prefill the year field. If the `year` parameter is not set, the current year is used.

## Usage

The usage is simple. Just add the `holder` and `year` parameters to the URL.
Example: `https://<your-domain>/?holder=Faouzi Mohamed&year=2023`

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
