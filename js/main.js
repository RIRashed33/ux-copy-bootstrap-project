let body = document.querySelector("body");

mobileSidebarOpen = (e) => {
    if(body.classList.contains("user-dropdown-open")){
        body.classList.remove("user-dropdown-open");
    }else if(body.classList.contains("open-sidebar")){
        body.classList.remove("open-sidebar");
    }else{
        body.classList.add("open-sidebar");
    }
}

userIcon = () => {
    if(body.classList.contains("user-dropdown-open")){
        body.classList.remove("user-dropdown-open");
    }else{
        body.classList.add("user-dropdown-open");
    }
    event.preventDefault();
}