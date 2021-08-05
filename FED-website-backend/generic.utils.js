// ---------------------------------------------------------
// Response Handler
// ---------------------------------------------------------

export const sendResponse = (res, status, responseBody) => {
  let success = status == 200 ? 'true' : 'false';
  let response = Object.assign({}, {success}, responseBody);  
  return res.status(status).json(response);
}