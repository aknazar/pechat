$(".moda-btn").on("click", function() {
	console.log("hihihi");
  $(".modal").addClass("modal-active");
  $(".modal-box").addClass("modal-active");
  $("body").addClass("body-lock");
});
$(".call-button").on("click", function() {
	console.log("hihihi");
  $(".modal").addClass("modal-active");
  $(".modal-box").addClass("modal-active");
  $("body").addClass("body-lock");
});
$(".submit").on("click", function() {
	console.log("hihihi");
  $(".modal").addClass("modal-active");
  $(".modal-box").addClass("modal-active");
  $("body").addClass("body-lock");
  $(".box-text").addClass("box-text-invisible");
  $(".box-text-buy").addClass("box-text-visible");
});
$(".close-modal").on("click", function() {
  $(".modal").removeClass("modal-active");
  $(".modal-box").removeClass("modal-active");
  $("body").removeClass("body-lock");
});
$("#send-btn").on("click", function() {
  $(".modal").removeClass("modal-active");
  $(".modal-box").removeClass("modal-active");
  $("body").removeClass("body-lock");
  $("#input-num").val("");
});