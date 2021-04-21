import qs from "qs";

//请求基础地址，如果是npm start启动，那么会读取.env.development文件
//如果是npm run build 启动，那么会读取.env文件
const BASE_URL: string = process.env.REACT_APP_API_URL || "";
//请求类型控制
type METHODS = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
/**
 * Fetch请求封装
 * @param api 请求相对地址
 * @param method 请求方法，默认GET
 * @param data 请求携带数据
 */
export const myFectch = (
  api: string,
  method: METHODS = "GET",
  data: object = {}
) => {
  return new Promise((resolve, reject) => {
    let params: {
      method: METHODS;
      body?: string;
      headers: Headers;
    } = {
      method,
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    if (method === "GET") {
      params = {
        method,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
    }
    //get请求也是将参数传在data身上，这里使用拼接即可
    const url =
      BASE_URL +
      api +
      (method === "GET" && Object.keys(data).length > 0
        ? "?" + qs.stringify(data)
        : "");
    fetch(url, params)
      .then(async (res) => {
        console.log(res);
        if (res.ok) {
          resolve(await res.json());
        } else {
          reject(res.statusText);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};
