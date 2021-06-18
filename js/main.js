// Reference: https://www.youtube.com/watch?v=NZNhuzyeD-Y
// Create a function that gets rid of the preloader

// 'load': when the website loads
window.addEventListener('load', function(){
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
})
