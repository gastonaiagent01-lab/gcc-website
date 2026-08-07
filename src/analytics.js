// GA4 loader -- only activates once VITE_GA_MEASUREMENT_ID is provided.
// No tracking runs until GCC supplies a real measurement ID (see GAS-12 notes
// on the privacy-policy mention needed once this is live).
export function initAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', id);
}
