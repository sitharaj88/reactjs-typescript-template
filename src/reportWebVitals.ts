import { type ReportHandler } from "web-vitals";

/**
 *
 * @param onPerfEntry
 *
 * @description
 * This function sends performance metrics to an analytics endpoint.
 *
 */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry instanceof Function) {
    import("web-vitals")
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
};

export default reportWebVitals;
