const fetchdata=callback=>{setTimeout(()=>{
    console.log("i love coding ")
},7500);
}
setTimeout(()=>{
    console.log("i hate coding ")
    fetchdata(text=>{
        console.log(text)
    })
},2000)
console.log("second");
console.log("three");