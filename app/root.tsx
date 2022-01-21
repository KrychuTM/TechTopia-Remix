import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from './tailwind.css';

type DocumentProps = {
  children: React.ReactNode[] | React.ReactNode;
  title?: String;
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

const Document: React.FC<DocumentProps> = ({children, title}) => {
  return (
    <html lang="en">
      <head>
        <title>{ title ? title : "TechTopia Remix"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
