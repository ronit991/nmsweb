function scrollLeft(){
    let gal = document.getElementById('galleryItems');
    gal.style.left -= 100;
    console.log('Scrolling left ...');
    console.log(gal.style.left);
}

function scrollRight(){
    let gal = document.getElementById('galleryItems');
    let left = gal.style.left;
    if(left === ''){
        left = 0;
    }
    else{
        left = parseInt(left);
    }
    if(left <= -464)
        return;

    let newLeft = (left-232).toString() + 'px';
    gal.style.left = newLeft;
}

function Left(){
    let gal = document.getElementById('galleryItems');
    let left = gal.style.left;
    if(left === ''){
        left = 0;
    }
    else{
        left = parseInt(left);
    }
    if(left >= 0)
        return;

    let newLeft = (left+232).toString() + 'px';
    gal.style.left = newLeft;
}