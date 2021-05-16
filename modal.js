const ModalBtn=document.querySelector(".modal-btn")
const ModalBg=document.querySelector(".modal-bg")
const ModalClose=document.querySelector(".modal-close")
ModalBtn.addEventListener("click",()=>{
    ModalBg.classList.add("modal-active")
})


ModalClose.addEventListener("click",()=>{
ModalBg.classList.remove("modal-active")
})