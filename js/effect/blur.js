
function enableBlurEffect(){
    let canvas = document.getElementById("canvas");
    canvas.style['-webkit-backdrop-filter'] = 'blur(5px)';
    canvas.style['-moz-filter'] = 'blur(5px)';
    canvas.style['-o-filter'] = 'blur(5px)';
    canvas.style['-ms-filter'] = 'blur(5px)';
    canvas.style['filter'] = 'blur(5px)';
}
function disableBlurEffect(){
    let canvas = document.getElementById("canvas");
    canvas.style['-webkit-backdrop-filter'] = '';
    canvas.style['-moz-filter'] = '';
    canvas.style['-o-filter'] = '';
    canvas.style['-ms-filter'] = '';
    canvas.style['filter'] = '';
}