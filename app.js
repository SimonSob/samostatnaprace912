if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}


function ZmenStranku1(){
    
    document.getElementById("film").className = "page_visible";
    document.getElementById("nastaveni").className = "page";
    document.getElementById("zobrazenifilmu").textContent = document.getElementById("nastvenifilmu").value;

}

function ZmenStranku2(){
    document.getElementById("film").className = "page";
    document.getElementById("nastaveni").className = "page_visible";
}


