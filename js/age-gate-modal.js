console.log("Hello World");

window.addEventListener("DOMContentLoaded", event => {
  // instanciate new modal
  var ageGateModal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ["button"],
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

  setAgeGateModalContent();

  // open modal
  ageGateModal.open();

  function setAgeGateModalContent() {
    ageGateModal.setContent(
      "<h3>Are you above the age of 18?</h3><p>Please tell me the truth</p>"
    );

    // add a button
    ageGateModal.addFooterBtn(
      "Yes, 18 or older",
      "tingle-btn tingle-btn--primary",
      function () {
        // here goes some logic
        ageGateModal.close();
      }
    );

    // add another button
    ageGateModal.addFooterBtn(
      "No, Im a minor",
      "tingle-btn tingle-btn--danger",
      function () {
        // drop cookie to prevent reentry for a period of time
        ageGateModal.close();
      }
    );
  }
});
