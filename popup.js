document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById('saveButton');

    saveButton.addEventListener('click', function () {
        const textAreaValue = document.getElementById('memo').value
        alert(textAreaValue)
    });
});


