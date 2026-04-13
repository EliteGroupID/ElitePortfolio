import { NextResponse } from "next/server";
import { allWorks } from "../../src/data/works";
import { allServices } from "../../src/data/services";
import { softwareProducts, iotProducts } from "../../src/data/products";

export const dynamic = "force-static";

export async function GET() {
  const siteUrl = "https://elitetech.dev";
  const siteName = "ELITECH ID.";
  const siteDescription = "Premium digital product studio specializing in web development, UI/UX design, and IoT solutions.";

  const now = new Date().toISOString();

  // Combine all content for the feed
  const items = [
    // Works
    ...allWorks.map((work) => ({
      title: work.title,
      description: work.desc || `Explore ${work.title} - ${work.category} project`,
      link: `${siteUrl}/works/${work.slug}`,
      pubDate: new Date(work.year || Date.now()).toISOString(),
      category: work.category,
      image: work.image,
    })),
    // Services
    ...allServices.map((service) => ({
      title: service.title,
      description: service.description,
      link: `${siteUrl}/services/${service.slug}`,
      pubDate: new Date().toISOString(),
      category: "Service",
      image: service.image,
    })),
    // Products
    ...softwareProducts.map((product) => ({
      title: product.name,
      description: product.description,
      link: `${siteUrl}/products/${product.slug}`,
      pubDate: new Date().toISOString(),
      category: "Software",
      image: product.image,
    })),
    ...iotProducts.map((product) => ({
      title: product.name,
      description: product.description,
      link: `${siteUrl}/products/${product.slug}`,
      pubDate: new Date().toISOString(),
      category: "IoT",
      image: product.image,
    })),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const rssItems = items
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <category><![CDATA[${item.category}]]></category>
      ${item.image ? `<enclosure url="${item.image}" type="image/jpeg" length="0" />` : ""}
      <content:encoded>
        <![CDATA[
          ${item.image ? `<img src="${item.image}" alt="${item.title}" style="max-width:100%;height:auto;" />` : ""}
          <p>${item.description}</p>
        ]]>
      </content:encoded>
    </item>
  `
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteName}]]></title>
    <description><![CDATA[${siteDescription}]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <managingEditor>hello@elitetech.dev (${siteName})</managingEditor>
    <webMaster>hello@elitetech.dev (${siteName})</webMaster>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
