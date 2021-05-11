// fromdata
var formdata  = new FormData()
const referto = class{
  constructor(arr) {
      this.arr = arr
  }

  appfrom(){
    var dataleng = this.arr.length
    return new Promise((resolve,reject)=>{
      for(let item in this.arr){
        formdata.append(Object.keys(this.arr[item])[0], Object.values(this.arr[item])[0])
        if(dataleng === this.arr.length){
          resolve(formdata)
        } 
      }
    })
  }


  men(){
    for(let item in this.arr){ 
     formdata.delete(Object.keys(this.arr[item])[0], Object.values(this.arr[item])[0])
    }
  }

}

export default referto
