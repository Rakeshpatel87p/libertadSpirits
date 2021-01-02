window.addEventListener("DOMContentLoaded", event => {
  const buyNowBtn = document.getElementById("buy-now-btn");

  buyNowBtn.addEventListener("click", () => {
    outOfStockModal.open();
  });

  var outOfStockModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ["button", "overlay", "escape"],
    closeLabel: "Close",
    cssClass: ["custom-class-1"],
    onOpen: function () {
      console.log("modal open");
    },
    onClose: function () {
      console.log("modal closed");
    },
    beforeClose: function () {
      return true; // close the modal
    },
  });

  setOutOfStockModal(outOfStockModal);
});

function setOutOfStockModal(modal) {
  modal.setContent("<input id='prospective-email' type='text' />");

  // add a button
  modal.addFooterBtn(
    "Submit Email",
    "tingle-btn tingle-btn--primary",
    function () {
			// here goes some logic
			const userInput = document.getElementById("prospective-email")
			console.log(userInput.value)
      modal.close();
    }
  );
}
