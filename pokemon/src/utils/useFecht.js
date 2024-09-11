export const useFetch = async (link) =>{
    try {
        const response = await fetch(link);
        const respJson = await response.json();
        return respJson
    } catch (error){
        console.log(error)
        return null
    }
}