// analytics.jsx
export const pageview = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: url });
  }
};

export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
