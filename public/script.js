window.addEventListener("load", function () {
  multerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(multerForm);
    for (let [name, value] of formData.entries()) {
      console.log(name, value);
    }
    fetch("/file-upload", {
      method: "post",
      body: formData,
    }).then(function () {
      console.log("complete");
    });
  });

  withoutMulter.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(withoutMulter);
    for (let [name, value] of formData.entries()) {
      console.log(name, value);
    }
  });

  dropZone.addEventListener("dragover", function (e) {
    e.preventDefault();
    console.log("dragging");
    dropZone.firstElementChild.textContent = "Drop file here..";
  });

  dropZone.addEventListener("drop", function (e) {
    e.preventDefault();
    console.log("dropped");
  });
});
