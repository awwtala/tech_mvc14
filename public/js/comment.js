const newFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-desc").value.trim();
  const blog_id = window.location.href.split("/")[4];

  if (content) {
    //what you need for comment
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ content, blog_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // document.location.replace("/comment");
      window.location.reload(); //tells the browser to refresh the page we are in
    } else {
      alert("Failed to create blog");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // document.location.replace("/comment");
      window.location.reload(); //tells the browser to refresh the page we are in
    } else {
      alert("Failed to delete blog");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".comment-list")
  .addEventListener("click", delButtonHandler);
