const generateMemeBtn=document.querySelector(".meme_generator .generate_btn");
const memeImage=document.querySelector(".meme_generator img");
const memeTitle=document.querySelector(".meme_generator h1");
const memeAuthor=document.querySelector(".meme_generator .meme_author");

updateDetails= (url,title,author) =>{
    // memeimage.src = url;
    memeImage.setAttribute("src", url);
    memeTitle.innerText = title;
    memeAuthor.innerText =`meme by ${author}`;

}
const GenerateMeme=async()=>{
    const response= await fetch("https://meme-api.com/gimme/wholesomememes");
    const data=await response.json();
    updateDetails(data.url,data.title,data.author);


}

generateMemeBtn.addEventListener("click",GenerateMeme);
GenerateMeme();