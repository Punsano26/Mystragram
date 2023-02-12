//ประกาศฟังก์ชั่น
function appendImageElement(keyword, index){
    const imgElement = document.createElement("img");
    imgElement.className = "img" +index;
    imgElement.src= `https://source.unsplash.com/255x255/?${keyword}&sig=${index}`;
    const galleryElement = document.querySelector(".gallery");
    galleryElement.appendChild(imgElement);
}
function renoveALLimage(){
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = "";
}
function searachPhotos (event){
    const keyword = event.target.value;
    if(event.key === "Enter" && keyword){
        renoveALLimage();
        for(let i = 1; i<=20; i++){
            appendImageElement(keyword,i);
        }
    }
}

function main(){
    
    const inputElement = document.querySelector(".search");
    inputElement.addEventListener("keydown", searachPhotos);
    
}


//------------------------------------//
//เรียกใช้ฟังก์ชั่น
main();