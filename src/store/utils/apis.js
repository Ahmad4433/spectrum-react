const apis = ()=>{
const baseUrl = 'https://spectrum2-94d8d206afc1.herokuapp.com/'
const list = {

getPersonalities:`${baseUrl}personalities/list`,
getTenetsList:`${baseUrl}tenet/list`

}
return list

}

export default apis