// add interactivity to modal (close it with x button)
function modalInteraction() {
  // Get the modal
  var modal = document.getElementById("TomModal");

  // Get the <span> element that closes the modal
  var span = document.getElementById("closeTomModal");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Add toggle effect to Modal
function modalToggle() {
  var modalTom = document.getElementById("TomModal");
  console.log (modalTom);

  var show = document.getElementById("show");
  console.log (show);

  show.addEventListener('click', () => {
    modalTom.classList.toggle('is-invisible');
  });
}





function insertModal() {
  var body = document.querySelector('body');
  var modalStyle = `<style>

  #TomModal {
    z-index: 50;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 30%;
    margin: 40px 0px 0px 0px;
  }

  .modal-content {
    background-color: #fefefe;
    border: 1px solid #888;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .modal-content > iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    overflow: scroll;
  }

  #closeTomModal {
    color: #aaa;
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 28px;
    font-weight: bold;
    z-index: 2;
  }

  #closeTomModal:hover, #closeTomModal:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  #TomModal.is-invisible {
    display: none;
  }

  #show {

    color: #aaa;
    position: fixed;
    top: 40px;
    right: 150px;
    font-size: 24px;
    font-weight: bold;
    z-index: 1000;
    background-color: #283E4A;
  }

  #show:hover, #show:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  </style>`

  // inserting modal in HTML
    body.insertAdjacentHTML('afterbegin',
      `${modalStyle}
      <span id="show">Show</span>
      <div id="TomModal" class="modal-container">
      <div class="modal-content">
      <span id="closeTomModal">&times;</span>
      <iframe src="https://readymag.com/u38532320/1887376/" width=100% height=80%></iframe>
      </div>
      </div>`);
    modalInteraction();
    modalToggle();}
  insertModal();
