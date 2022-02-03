/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

defaultTheme = ev => {
   document.querySelector('body').className = '';
};

oceanTheme = ev => {
   document.querySelector('body').className = 'ocean';
};

desertTheme = ev => {
   document.querySelector('body').className = 'desert';
};

highContrastTheme = ev => {
   document.querySelector('body').className = 'high-contrast';
};


document.querySelector('#default').addEventListener('click', defaultTheme);
document.querySelector('#ocean').addEventListener('click', oceanTheme);
document.querySelector('#desert').addEventListener('click', desertTheme);
document.querySelector('#high-contrast').addEventListener('click', highContrastTheme);