
const btnFrmVagas = $("#btnFrmVagas");
const modal = $("#modal");
const closeModal = $("#closeModal");

btnFrmVagas.click(() => {
	modal.css("display", "block");
})

closeModal.click(() => {
	modal.css("display", "none");
})

closeModal.click(() => {
	modal.css("display", "none");
})

$("#btnWork").click(function() {
	$(this).addClass(" btn-checked");
	$("#btnProject").removeClass(" btn-checked");
});

$("#btnProject").click(function() {
	$(this).addClass(" btn-checked");
	$("#btnWork").removeClass(" btn-checked");
});

$(".chosen-select").chosen({
	no_results_text: "Nada por aqui..."
})
