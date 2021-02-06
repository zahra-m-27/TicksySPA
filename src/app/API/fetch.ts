import { message } from "antd";
import BaseResponse from "./Common/BaseResponse";

let BaseUrl = "https://api.ticksy.margay.ir";

export function Post<T extends BaseResponse>(
  url: string,
  data: any,
  showNotifier = false,
  showLog = true
) {
  return new Promise<T>((resolve, reject) => {
    if (showLog) {
      console.log(BaseUrl + url + ":  Request  : " + JSON.stringify(data));
    }
    fetch(BaseUrl + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (showLog) {
          console.debug("=".repeat(50));
          console.log(url, "Response:", response);

          console.debug("=".repeat(50));
        }
        if (response.status === 200) {
          resolve((await response.json()) as T);
        } else {
          if (showNotifier) {
            message.success("انجام این عملیات ممکن نیست", 5);
          }
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
