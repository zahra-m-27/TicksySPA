import BaseResponse from "./Common/BaseResponse";
import { message } from "antd";


let BaseUrl = "http://Example.com";
let apiPath = "/api";

export function Post<T extends BaseResponse>(
    url: string,
    data: any,
    showNotifier = true,
    showLog = true
) {
    // @ts-ignore
    return new Promise<T>((resolve, reject) => {
        if (showLog) {
            console.log(
                BaseUrl + apiPath + url + ":  Request  : " + JSON.stringify(data)
            );
        }
        fetch(BaseUrl + apiPath + url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (response) => {
                let content = await response.text();
                if (!content) {
                    reject();
                    return <T>{};
                }
                return <T>JSON.parse(content);
            })
            .then((response) => {
                if (!response.error) {
                    return;
                }
                if (showLog) {
                    // @ts-ignore
                    console.debug("=".repeat(50));
                    console.log(url, "Response:", response);
                    // @ts-ignore
                    console.debug("=".repeat(50));
                }
                if (response.error.code === 0) {
                    resolve(response);
                } else {
                    if (showNotifier) {
                        message.success(response.error.message, 5);
                    }
                    reject();
                }
            });
    .catch((error)=>{
            console.log(response.error);
        )};

    });
}
