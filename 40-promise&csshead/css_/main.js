(function() {

    var header = document.querySelector('.container');
    var selectBox = document.querySelector('select');
    var runButton = document.querySelector('button');

    // On SelectBox Change
    selectBox.addEventListener('change', function() {
        triggerAnimation();
    })

    // On "run animation" button clicked
    runButton.addEventListener('click', function(e) {
        e.preventDefault();
        triggerAnimation();
    })

    function triggerAnimation() {

        var animation = selectBox.value;
        header.className = ''
        setTimeout(function() {
            header.className = "animated container " + animation;
        }, 10);

    }

})();