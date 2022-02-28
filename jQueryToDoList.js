const addListItem = function (e) {
  e.preventDefault();
  const text = $("input").val();
  const $newLi = $(`<li><span>${text}</span><a class="delete">Delete</a></li>`);
  let $listItem = $("ul.today-list li span");

  $listItem.off("click", clickListItem);
  $todayList = $("ul.today-list");
  $todayList.append($newLi);
  $listItem = $("ul.today-list li span");
  $delete = $(".delete");
  $listItem.on("click", clickListItem);
  $delete.on("click", deleteListItem);
};

const clickListItem = function (event) {
  this.parentNode.classList.toggle("done");
};

const deleteListItem = function (event) {
  this.parentNode.remove();
};

$addButton = $(".add-item");
$listItem = $("ul.today-list li span");
$delete = $(".delete");
$addButton.on("click", addListItem);
$listItem.on("click", clickListItem);
$delete.on("click", deleteListItem);
