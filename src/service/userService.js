import {api, requestConfig} from '../utils/config'

const profile = async(DataTransfer, token) => {
    const config = requestConfig("GET", DataTransfer, token)

    try{
        const res = await fetch(api + "/users/profile", config).then((res) => res.json()).catch((err) => err)

        return res;
    }catch(error){
            console.log(error)
    }
}

const userService = {
    profile,
}

export default userService