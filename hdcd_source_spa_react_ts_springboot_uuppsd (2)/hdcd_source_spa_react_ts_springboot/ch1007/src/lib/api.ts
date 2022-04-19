import client from "./client";

export const adminSetup = (userId: string, userName: string, userPw: string) => client.post("/users/setup", { userId, userName, userPw });
