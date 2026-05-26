import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ReactNode } from "react";

function MdxLink({
  href = "",
  children,
}: {
  href?: string;
  children?: ReactNode;
}) {
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
}

function Callout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-xl border border-brand-orange/30 bg-brand-orange/10 p-5">
      {title && <p className="mb-2 font-semibold text-brand-orange">{title}</p>}
      <div className="text-muted-strong">{children}</div>
    </aside>
  );
}

export const mdxComponents: MDXComponents = {
  a: MdxLink,
  h2: ({ children }) => (
    <h2 className="mt-12 text-3xl font-semibold tracking-tight">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-9 text-2xl font-semibold tracking-tight">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 leading-8 text-muted-strong">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-3 pl-6 text-muted-strong">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-3 pl-6 text-muted-strong">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="rounded-md border border-border bg-surface-soft px-1.5 py-0.5 font-mono text-sm text-brand-orange">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-xl border border-border bg-surface p-4 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 border-brand-orange pl-5 text-muted-strong">
      {children}
    </blockquote>
  ),
  Callout,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
