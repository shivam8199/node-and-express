 //console.log(process.argv)
 //PS C:\nodeandexpress crash course> node inputfromcmd.js hello gfbdf fbdfd fbdbdb fbdbd fdbdsbb
// [
//     'C:\\Program Files (x86)\\nodejs\\node.exe',
//     'C:\\nodeandexpress crash course\\inputfromcmd.js',     
//     'hello',
//     'gfbdf',
//     'fbdbdb',
//     'fbdbd',
//     'fdbdsbb'
//   ]
const fs=require('fs');
const input=process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}
else if (input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("invalid input")
}
//PS C:\nodeandexpress crash course>
//  node inputfromcmd.js add orange.txt
//    'this is colour and fruit'