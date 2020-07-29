import api from "./fakeApi.json";

const milliseconds = [2000, 3000, 4000, 5000];

export const fakeApi = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      resolve(api);
    }, milliseconds[Math.floor(Math.random() * 4)]);
  });
};
