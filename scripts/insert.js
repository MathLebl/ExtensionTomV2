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


function insertModal() {
  var body = document.querySelector('body');
  var modalStyle = `<style>

  #TomModal {
    z-index: 50;
    position: fixed;
    right: 0;
    top: 0;
    height: 550px;
    width: 30%;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    border: 1px solid #888;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: relative;
  }

  iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    border-radius: 20px;
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

  </style>`

  // inserting modal in HTML
    body.insertAdjacentHTML('afterbegin',
      `${modalStyle}
      <div id="TomModal" class="modal-container">
      <div class="modal-content">
      <span id="closeTomModal">&times;</span>
      <iframe src="https://readymag.com/u38532320/1883919/" width=100% height=100%></iframe>
      </div>
      </div>`);
    modalInteraction();}
  insertModal();


