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
    background-color: rgba(0,0,0,0.4);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    min-height: 30vh;
    width: 60%;
    text-align: center;
    border-radius: 20px;
    position: relative
  }

  #closeTomModal {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  #closeTomModal:hover, #closeTomModal:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  h1 {

  }
  </style>`

  // inserting modal in HTML
    body.insertAdjacentHTML('afterbegin',
      `${modalStyle}
      <div id="TomModal" class="modal-container">
      <div class="modal-content">
      <span id="closeTomModal">&times;</span>
      <h1 class="TomModalName" style="color:black">Tomas</h1>
      </div>
      </div>`);
    modalInteraction();}
  insertModal();
