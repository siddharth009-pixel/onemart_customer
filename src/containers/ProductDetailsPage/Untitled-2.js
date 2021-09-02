
let series = {
    hiren: {
        category: {
            action: ["green arrow", "GOT", "flash"],
            sitcom: ["friends", "biigbang", "brooklyn99", "HIMM"],
            drama: ["the 100", "ragnarok", "wampire diaries"]
        }
    }
}

// object.keys turns object into array of keys

let desiredArray=[]

Object.keys(series.hiren.category).find(key=>{
    if(key=='sitcom'){
        desiredArray=series.hiren.category['sitcom']
        return true
    }
})
