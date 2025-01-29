import { axiosGoldInstance } from "../api/axiosInstance";

export const fetchGoldPrice = async (metalSymbol, currency) => {
    try{
        const {data} = await axiosGoldInstance.get(`${metalSymbol}/${currency}`);
        // console.log("data: ", data);
        
        return data;
    } catch (error) {
        console.log("error: ", error);
        
        throw new Error(error?.message);
    }
};