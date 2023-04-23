function buttonCode()
{
      var textbox = document.getElementById("nameChange")
    document.title = (textbox.value)
    localStorage.setItem('tabname', textbox.value)
}