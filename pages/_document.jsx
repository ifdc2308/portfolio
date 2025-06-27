import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/IconLogo.svg" />
        <title>ID-DEV | Desenvolvimento</title>
        {/* meta tags e fontes indexaveis são add aqui */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
