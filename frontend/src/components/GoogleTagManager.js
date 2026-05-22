import Script from "next/script";

/**
 * Google Tag Manager — fires GTM-KFT8JB48 (overridable via NEXT_PUBLIC_GTM_ID).
 * Renders the head script via next/script and a noscript iframe fallback in body.
 * Pair with `GTMNoScript` rendered immediately after <body>.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KFT8JB48";

export function GTMHead() {
  return (
    <Script
      id="gtm-head"
      strategy="afterInteractive"
      data-testid="gtm-script"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

export function GTMNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        data-testid="gtm-noscript"
        title="Google Tag Manager"
      />
    </noscript>
  );
}
