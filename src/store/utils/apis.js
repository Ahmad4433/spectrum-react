const apis = ()=>{
const baseUrl = 'https://spectrum2-94d8d206afc1.herokuapp.com/'
const local = 'http://localhost:8080/'
const list = {
userId:'65f5d078e7a62078ced37015',
getPersonalities:`${baseUrl}personalities/list`,
getTenetsList:`${baseUrl}tenet/list`,
addUserPersonality:`${baseUrl}user/personality/add`,
userPersonalityList:`${baseUrl}user/personality/list`,
userTotalPersonalities:`${baseUrl}user/total/personalities`,
deleteUserPersonality:`${baseUrl}user/personality/delete`,
getUserTenetsList:`${baseUrl}user/tenet/list`,
addUserTenet:`${baseUrl}user/add/tenet`,
getUserTotalTenets:`${baseUrl}user/total/tenets`,
deleteUserTenet:`${baseUrl}user/delete/tenet`



}
return list

}

export default apis