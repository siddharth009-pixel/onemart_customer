// export const api='http://localhost:5001/api'
// export const api='https://great-falcon-86.loca.lt/api'
export const api=process.env.API

export const generatePublicUrl=(filename)=>{
    // return `http://localhost:2000/public/${filename}`
    return `${filename}`
}