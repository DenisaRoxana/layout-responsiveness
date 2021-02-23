const menuMobile = document.getElementById("menuMobile");
const sectionView = document.getElementById("sectionView");
const exitIcon = document.getElementById("exitIcon");

menuMobile.addEventListener('click', function(){
    console.log('click');
        sectionView.classList.remove('hidden');
})

exitIcon.addEventListener('click', function(){
   
       sectionView.classList.add('hidden');
})