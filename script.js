function showSection(header)
{
	const content = header.nextElementSibling;
  if(content.style.display=="none"||content.style.display=="")
  {
  	content.style.display="block";
    header.classList.add("expanded-after");
  }
  else
  {
    content.style.display="none";
    header.classList.remove("expanded-after");
  }
}
function revealNumber(button)
{
	const number = button.nextElementSibling;
  number.classList.add("reveal");
}
function triggerModal(myButton)
{
  const parentDiv = myButton.parentElement;
  const modal = parentDiv.nextElementSibling;
  if (modal&&(modal.style.display == "none" || modal.style.display == "")) {
    modal.style.display = "block";
  }
  else
  {
    myButton.closest('.modal').style.display="none";
  }
}