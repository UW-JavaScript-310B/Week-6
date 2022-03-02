const addListItem = function (event) {
  event.preventDefault();
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
  let $this = $(this);
  console.log($this);
  $this.parent().toggleClass(`done`);
};

const deleteListItem = function (event) {
  let $this = $(this);
  $this.parent().remove();
};

$addButton = $(".add-item");
$listItem = $("ul.today-list li span");
$delete = $(".delete");
$addButton.on("click", addListItem);
$listItem.on("click", clickListItem);
$delete.on("click", deleteListItem);
