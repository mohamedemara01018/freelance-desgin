import { BASE_URL } from "@/utils/constant.utils";

export const userService = {
    me: async () => {
        const response = await fetch(`${BASE_URL}/api/user/user/me`, {
            credentials: 'include',
        })
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'something went wrong when register')
        }

        return data
    }
}