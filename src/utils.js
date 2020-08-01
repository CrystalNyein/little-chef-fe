export const appendApiKey = (link) =>
  `${process.env.REACT_APP_END_POINT}${link}?rapidapi-key=${process.env.REACT_APP_API_KEY}`;

export const getTrackingId = (trackingId) => trackingId.split("/")[1];

export const shortenDescription = (description) =>
  description.split(".").slice(0, 6).join() + ".";

export const roundUpDecimal = (num) => Math.round(num * 100) / 100;
