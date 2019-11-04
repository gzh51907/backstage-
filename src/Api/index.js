import axios from 'axios'

let Cakl=axios.create({
    baseURL:'http://10.3.133.73:1998/goods'
})

export async  function get(params,config={}){
  let {data}=await Cakl.get('',{
            ...config,
            params
  })
   return data
}

export async  function getlist(params,config={}){
    let {data}=await Cakl.get('/list',{
              ...config,
              params
    })
     return data
  }
export  async function post(params,config={}){
    let {data}=await Cakl.post('',params,config)
    return data;
}


export async  function deletel(params,config={}){
    let {data}=await Cakl.delete('',{
              ...config,
              params
    })
     return data
  }


export default {
   get,
   post,
   getlist,
   deletel
}