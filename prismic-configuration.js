import Prismic from "prismic-javascript";

export const apiEndpoint = "https://prom-night-girls.cdn.prismic.io/api/v2";
export const accessToken =
  "MC5ZTUFtTFJBQUFDSUEzWDNy.77-977-977-977-9ee-_ve-_ve-_ve-_ve-_ve-_vRPvv71RDu-_ve-_vVvvv73vv70qQQ_vv73vv73vv716bO-_ve-_ve-_ve-_vQ";

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
