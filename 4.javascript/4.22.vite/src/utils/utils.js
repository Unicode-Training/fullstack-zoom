import { ENV } from "@/configs/config";
export const doSomething = () => {
    console.log(ENV.BACKEND_URL);
}