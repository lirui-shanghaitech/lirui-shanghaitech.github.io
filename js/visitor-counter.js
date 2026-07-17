/*
 * Privacy-conscious visitor counter.
 *
 * Production visits are deduplicated by the counter service. Local previews
 * only read the current value and never increment it.
 */
(function () {
  const config = window.SITE_CONTENT?.visitorCounter;
  const counter = document.querySelector("#visitor-count");
  const value = document.querySelector("#visitor-count-value");

  if (!config?.enabled || !counter || !value) {
    counter?.setAttribute("hidden", "");
    return;
  }

  const baseUrl = config.serviceBaseUrl.replace(/\/$/, "");
  const query = new URLSearchParams({
    site: config.site,
    path: config.path,
  });
  const shouldTrack = config.trackOnHosts.includes(window.location.hostname);

  counter.querySelector("span").textContent = `${config.label}:`;
  counter.title = config.deduplicationNote;

  const request = async (endpoint) => {
    const response = await fetch(`${baseUrl}/${endpoint}?${query}`, {
      cache: "no-store",
      credentials: "omit",
      keepalive: endpoint === "track",
    });

    if (!response.ok) {
      throw new Error(`Visitor counter request failed: ${response.status}`);
    }

    return response.json();
  };

  const updateCounter = async () => {
    counter.dataset.state = "loading";

    try {
      if (shouldTrack) {
        await request("track");
      }

      const result = await request("views");
      const views = Number(result.views);

      if (!Number.isFinite(views) || views < 0) {
        throw new Error("Visitor counter returned an invalid value");
      }

      value.textContent = Math.trunc(views).toLocaleString("en-US");
      counter.dataset.state = "ready";
    } catch (error) {
      value.textContent = "—";
      counter.dataset.state = "error";
      counter.title = "Visitor count is temporarily unavailable.";
    }
  };

  updateCounter();
})();
