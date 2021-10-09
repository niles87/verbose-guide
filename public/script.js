window.addEventListener('load', function() {

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form)
        for (let [name, value] of formData.entries()) {
            console.log(name, value)
        }
        fetch('/file-upload',{
            method: 'post',
            body: formData
        }).then(function(){
            console.log('complete')
        })
    });
})