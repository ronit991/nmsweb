function teamScrollRight(){
    let gal = document.getElementById('teamProfileContainer');
    let left = gal.style.left;
    if(left === ''){
        left = 0;
    }
    else{
        left = parseInt(left);
    }
    if(left <= -60)
        return;

    let newLeft = left-30;
    gal.style.left = newLeft.toString() + 'vw';
}

function teamScrollLeft(){
    let gal = document.getElementById('teamProfileContainer');
    let left = gal.style.left;
    if(left === ''){
        left = 0;
    }
    else{
        left = parseInt(left);
    }
    if(left >= 0)
        return;

    let newLeft = left+30;
    /*if(newLeft > 0)
        newLeft = 0;*/

    gal.style.left = newLeft.toString() + 'vw';;
}