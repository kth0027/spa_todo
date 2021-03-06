import axios from "axios";

export const registerBoard = (title: string, content: string, writer: string) => axios.post("/boards", { title, content, writer });

export const fetchBoard = (boardNo: string) => axios.get(`/boards/${boardNo}`);

export const fetchBoardList = () => axios.get("/boards");
