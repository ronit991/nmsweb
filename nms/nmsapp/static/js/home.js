let doc = {
    overlayMask: document.getElementById('overlayMask'),
    startProjForm: document.getElementById('startProjectForm'),
    spfClientName: document.getElementById('clientName'),
    spfClientCompany: document.getElementById('clientCompany'),
    spfClientEmail: document.getElementById('clientEmail'),
    spfClientPhoneNo: document.getElementById('clientPhoneNo'),
    spfClientMessage: document.getElementById('clientProjectDescription')
}


function showStartProjForm(){
    doc.startProjForm.style.display = 'block';
    doc.overlayMask.style.display = 'block';
}

function hideStartProjForm(){
    doc.startProjForm.reset();
    doc.startProjForm.style.display = '';
    doc.overlayMask.style.display = '';
}

function submitStartProjForm(){
    console.log('Submitting form');
    $.ajax({
        type:'GET',
        url: '/startaproject/',
        data:{
            clientName    : doc.spfClientName.value,
            clientCompany : doc.spfClientCompany.value,
            clientEmail   : doc.spfClientEmail.value,
            clientPhoneNo : doc.spfClientPhoneNo.value,
            clientMessage : doc.spfClientMessage.value
        },
        success: function(response)
        {
            //console.log(response);
            hideStartProjForm();
        },
        error: function(data) {
            console.log(data);
        }
    });

    return false;
}