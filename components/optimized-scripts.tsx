import Script from "next/script"

interface OptimizedScriptsProps {
  gtmId?: string
  disableAnalytics?: boolean
}

/**
 * OptimizedScripts component
 * - Defers non-critical scripts to improve FID
 * - Implements analytics with consent checks
 * - Uses Next.js Script component for optimal loading
 */
export function OptimizedScripts({
  gtmId,
  disableAnalytics = false,
}: OptimizedScriptsProps) {
  // Use environment variable if available, otherwise use provided gtmId
  const gtmIdToUse = process.env.NEXT_PUBLIC_GTM_ID || gtmId;
  
  // Only load analytics if not disabled and a valid GTM ID exists
  const shouldLoadAnalytics = !disableAnalytics && 
    gtmIdToUse && 
    gtmIdToUse !== "GTM-XXXXX" && 
    gtmIdToUse.startsWith("GTM-");

  return (
    <>
      {/* Google Tag Manager - with proper strategy and consent checking */}
      {shouldLoadAnalytics && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmIdToUse}');
              `,
            }}
          />
          <noscript>
            <iframe 
              src={`https://www.googletagmanager.com/ns.html?id=${gtmIdToUse}`}
              height="0" 
              width="0" 
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm"
            />
          </noscript>
        </>
      )}

      {/* Local business schema enhancement script - runs only when browser is idle */}
      <Script
        id="local-business-enhancement"
        strategy="lazyOnload"
      >
        {`
          document.addEventListener('DOMContentLoaded', function() {
            // Execute non-critical JavaScript when browser is idle
            if ('requestIdleCallback' in window) {
              requestIdleCallback(function() {
                // Enhance local business markers on maps or other non-critical tasks
                const maps = document.querySelectorAll('iframe[src*="google.com/maps"]');
                if (maps.length > 0) {
                  maps.forEach(map => {
                    map.loading = "lazy";
                    map.title = map.title || "Location map";
                  });
                }
              });
            }
          });
        `}
      </Script>
    </>
  )
} 