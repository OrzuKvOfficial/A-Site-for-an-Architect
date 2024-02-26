document.addEventListener("DOMContentLoaded", function() {
    var styleTag = document.createElement('style');
    styleTag.innerHTML = `
        body {
            background-color: #d5d6d8;
            padding-top: 56px;
        }
        
        .navbar-nav .nav-item {
            margin-right: 120px;
            font-family: 'Raleway', sans-serif;
            font-weight: inherit;
        }
        
        .main-image-container img {
            width: 100%;
            height: auto;
        }
        
        .empty-field {
            width: 100%;
            height: 110px;
        }
        
        .cosmos {
            width: 100%;
            height: 32px;
        }
        
        .footer-icons {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .footer-icon {
            margin: 0 10px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #343a40;
            transition: background-color 0.3s ease;
        }
        
        @media (max-width: 1200px) {
            footer {
                text-align: center;
            }
        
            .footer-icons {
                display: flex;
                color: #ffffff;
                margin: 0 10px;
                transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
            }
        
            .footer-icon {
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
    `;
    
    document.head.appendChild(styleTag);
});
