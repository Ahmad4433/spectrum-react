const apis = ()=>{
const baseUrl = 'https://spectrum2-94d8d206afc1.herokuapp.com/'
const local = 'http://localhost:8080/'
const list = {

getPersonalities:`${baseUrl}personalities/list`,
getTenetsList:`${baseUrl}tenet/list`,
addUserPersonality:`${local}user/personality/add`,
userPersonalityList:`${local}user/personality/list`,
userTotalPersonalities:`${local}user/total/personalities`,
deleteUserPersonality:`${local}user/personality/delete`,


}
return list

}

export default apis