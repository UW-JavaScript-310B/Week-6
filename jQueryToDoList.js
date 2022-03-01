/**
 * Toggles "done" class on <li> element
 */
$("li").on("click", function(e) {
  $listItem = $(this);
  $listItem.toggleClass("done");
});

/**
 * Delete element when delete link clicked
 */
$(".delete").on("click", function(e) {
  console.log(this);
  $(this).parent().remove();
});

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  const text = $('input').val();
  let $listItem = $("<li>");
  $listItem.append(addListSpan(text));
  $listItem.append(addListDeleteBtn());
  addListItemToggle($listItem);
  $(".today-list").append($listItem);
};

const addListDeleteBtn = () => {
  let $listDeleteBtn = $("<a>");
  $listDeleteBtn.text("Delete");
  $listDeleteBtn.addClass("delete");
  $listDeleteBtn.on("click", function(e) {
    console.log(this);
    $listDeleteBtn.parent().remove();
  });
  return $listDeleteBtn;
}

const addListSpan = (text) => {
  let $listSpan = $("<span>");
  $listSpan.text(text);
  return $listSpan;
}

const addListItemToggle = ($listItem) => {
  $listItem.on("click", function(e) {
    $listItem = $(this);
    $listItem.toggleClass("done");
  })
}

// add listener for add
$(".add-item").on("click", function(e) {
  addListItem();
});