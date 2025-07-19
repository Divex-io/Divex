import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebSite } from "schema-dts";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const isHebrew = locale === "he";
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return (
    <html lang={locale} dir={isHebrew ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href={`https://www.divex.io`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.divex.io"
        />
        <link rel="alternate" hrefLang="en" href="https://www.divex.io/en" />
        <link rel="alternate" hrefLang="he" href="https://www.divex.io/he" />
        <meta name="keywords" content={t("keywords")} />
        <meta name="author" content="Alon & Yiftach" />
        <meta name="robots" content="index, follow" />
        <script
          {...jsonLdScriptProps<WebSite>({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: t("title"),
            description: t("description"),
            url: "https://www.divex.io",
            inLanguage: locale,
          })}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const locales = ["en", "he"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    other: {
      "google-site-verification": "sVYBYfSJfXdBca3QoqsZtD6lsWVH6sk02RCH4YAbcm8",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://www.divex.io`,
      siteName: "Divex",
      images: [],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [],
      creator: "@s0ver5",
    },
    alternates: {
      canonical: `https://www.divex.io`,
      languages: {
        en: "https://www.divex.io/en",
        he: "https://www.divex.io/he",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
