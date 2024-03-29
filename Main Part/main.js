function changeLanguage(language) {
    document.documentElement.lang = language;
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    var styleTag = document.createElement('style');
    styleTag.innerHTML = `
       
body {
    background-color: #6e7781;
    padding-top: 56px;
}

.navbar-nav .nav-item {
    margin-right: 120px;
    /* font-family: 'Raleway';font-size: 16px; */
    font-family: 'Raleway', sans-serif;
    font-weight: inherit;
}

.carousel-inner {
    max-height: auto;
    /* O'zingiz kerakli o'lchamni tanlang */
    overflow: hidden;
}

.main-image-container img {
    width: 100%;
    height: auto;
}
#accordion {
 margin-top: 20px; /* Adjust the margin as needed */
}

.card {
 background-color: #f8f9fa; /* Set your desired background color */
 border: 1px solid #dee2e6;
 border-radius: 5px;
 margin-bottom: 10px;
}

.card-header {
 background-color: #343A40; /* Set your desired header background color */
 color: #fff; /* Set the text color for the header */
}

.card-body {
 background-color: #69747e; /* Set your desired content background color */
}

.middle {
    width: 100%;
    height: 18px;
}
.anything{
    width: 100%;
    height: 20px;
}
.anything2{
    width: 100%;
    height: 28px;
}

.footer-icons {
 display: flex;
 justify-content: center;
 align-items: center;
}

.footer-icon {
 margin: 0 10px; /* Adjust the margin as needed */
 width: 40px; /* Set the desired width */
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #343a40; /* Set the background color */
 transition: background-color 0.3s ease; /* Add a transition effect */
}


@media (max-width: 1200px) {
    footer {
        text-align: center;
    }

    .footer-icons {
        display: flex;
        /* font-size: 14px; */
        color: #ffffff;
        margin: 0 10px;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .footer-icon {
        font-size:20px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .footer-icon:hover {
        color: #28a745;
        transform: scale(1.2);
    }

    p {
        margin-bottom: 5px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    p:hover {
        color: #28a745;
        transform: scale(1.2);
    }
}

@media (max-width: 767px) {
    footer {
        text-align: center;
    }

    .footer-icons {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-icon {
        margin: 0 10px;
        font-size: 20px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .footer-icon:hover {
        color: #28a745;
        transform: scale(1.2);
    }

    p {
        margin-bottom: 5px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    p:hover {
        color: #28a745;
        transform: scale(1.2);
    }
}

@media (min-width: 992px) {
    #changeButton {
        display: none;
    }
}

footer {
    background-color: #343a40;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.footer-icon {
    font-size: 14px;
    color: #ffffff;
    margin: 0 10px;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 20px;
    margin: 14px;
}

.footer-icon:hover {
    color: #28a745;
    transform: scale(1.2);
}

.main-image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.overlay-container {
    width: calc(50% - 10px);
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.overlay:hover {
    opacity: 1;
}

@media (max-width: 767px) {
    .main-image-container {
        flex-direction: column;
    }

    .overlay-container {
        width: 100%;
    }
}
@media (max-width: 900px){
    .anything{
        width: 100%;
        height: 20px;
    }
    .anything2{
        width: 100%;
        height: 25px;
    }
}
@media (max-width: 290px){
    .anything{
        width: 100%;
        height: 15px;
    }
    .anything2{
        width: 100%;
        height:10px;
    }
}
@media (max-width: 380px){
    .anything{
        width: 100%;
        height: 15px;
    }
    .anything2{
        width: 100%;
        height:10px;
    }
}
    `;
    
    document.head.appendChild(styleTag);
});
