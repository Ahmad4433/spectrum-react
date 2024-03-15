const apis = ()=>{
const baseUrl = 'https://spectrum2-94d8d206afc1.herokuapp.com/'
const local = 'http://localhost:8080/'
const list = {

getPersonalities:`${baseUrl}personalities/list`,
getTenetsList:`${baseUrl}tenet/list`,
addUserPersonality:`${baseUrl}user/personality/add`,
userPersonalityList:`${baseUrl}user/personality/list`,
userTotalPersonalities:`${baseUrl}user/total/personalities`,
deleteUserPersonality:`${baseUrl}user/personality/delete`,


}
return list

}

export default apis