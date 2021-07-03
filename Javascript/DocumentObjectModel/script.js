function checkSlot(){
    let ag=document.querySelector("#age").value
    let html_data=ag>18?"eligible":"not eligible"
    alert(html_data)
}