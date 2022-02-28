const addListItem = function (e) {
  let $listItem = $("ul.today-list li span");
  $listItem.off("click", clickListItem);
  console.log("addList");
  e.preventDefault();
  const text = $("input").val();
  $todayList = $("ul.today-list");
  const $newLi = $(`<li><span>${text}</span><a class="delete">Delete</a></li>`);
  $todayList.append($newLi);
  $listItem = $("ul.today-list li span");
  console.log($listItem);
  $delete = $(".delete");
  $listItem.on("click", clickListItem);
  $delete.on("click", deleteListItem);
};

const clickListItem = function (event) {
  //this.toggleClass(".done");
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
