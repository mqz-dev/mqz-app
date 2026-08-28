export default function Seo({
  title = "MQZ App - Turn Your Profile Into a Beautiful Webpage.",
  description = "Pick a theme, fill in your details and download a polished webpage in minutes. No Signup or Credit Card required.",
  url = "https://mqz.app",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://mqz.app/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://mqz.app/og-image.png" />
    </>
  );
}
