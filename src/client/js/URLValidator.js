export function  validateURL(URL){
const regExp = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)
if (URL.match(regExp)){
return true;
    }else{
        return false
    }
}