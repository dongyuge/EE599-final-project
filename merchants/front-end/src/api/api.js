import axios from 'axios';


var home = function(obje,urling){
	return new Promise((resolve,reject)=>{
      console.log(obje)
      axios.post((urling),obje)
      .then((res)=>{
        console.log('res: ')
        console.log(res)
        resolve(res)
      })
      .catch((err)=>{
        console.log('err: why')
        console.log(err)
        reject(err)
      })
	})
}

var getdata = function(urling){
	return new Promise((resolve,reject)=>{
      axios.get((urling))
      .then((res)=>{
        // console.log(res)
        resolve(res)
      })
      .catch((err)=>{
        // console.log(err)
        reject(err)
      })
	})

}

export{home,getdata}
