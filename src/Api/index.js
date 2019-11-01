import axios from 'axios'

let Cakl=axios.create({
    baseURL:'https://www.nanshig.com/mobile/index.php'
})

export async  function get(params,config={}){
  let {data}=await Cakl.get('',{
            ...config,
            params
  })
   return data
}
export  async function post(params,config={}){
    let {data}=await Cakl.post('',params,config)
    return data;
}

export default {
get,post
}