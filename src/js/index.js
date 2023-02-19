const botaoTriler = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const Video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDovideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTriler.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDovideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    Video.setAttribute("src", "");   
   });