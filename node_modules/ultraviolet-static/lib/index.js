import { fileURLToPath } from "url";

export const publicPath = fileURLToPath(new URL("../public/", import.meta.url));
