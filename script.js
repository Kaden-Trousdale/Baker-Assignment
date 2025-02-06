// doc ready function

$(document).ready(() => {
  $("#draggableImage").draggable();
});

// drag and drop reservation (position) function
$(document).on("mouseup", (event) => {
  if (event.target.id != "draggableImage" && event.target.id != "") {
    $("#reserveTxt").append(
      "<li class='list-group-item'>" +
        "You have reserved " +
        event.target.id +
        "</li>"
    );
    console.log(event.target.id, $("#" + event.target.id).position());
  }
});