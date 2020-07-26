

function addItem(a){
    var inp = a.parentNode.childNodes[1].value
    if(inp != ''){
    var additem =  document.getElementById('addItemInput')
    var itemList = document.getElementById('itemList')
    var li = document.createElement('li')
    var inp =  document.createElement('input')
    inp.setAttribute("type",'text')
    inp.value = additem.value
    inp.disabled = true
    li.appendChild(inp)
    itemList.appendChild(li)

    
    //Edit button
    var EditBtn = document.createElement('button')
    EditBtn.innerHTML = 'Edit'
    EditBtn.setAttribute('onclick','editFn(this)')
    li.appendChild(EditBtn)

    //Update butoon
    var UpdateBtn = document.createElement('button')
    UpdateBtn.innerHTML = 'Update'
    UpdateBtn.setAttribute('onclick','updateBtnFn(this)')
    UpdateBtn.style.display = "none"
    li.appendChild(UpdateBtn)
    
    //Delete button
    var detBtn = document.createElement('button')
    detBtn.innerHTML = "Delete"
    detBtn.setAttribute('onclick','deleteBtn(this)')
    li.appendChild(detBtn)

    //Clear Input 
    inp=''
    }else{
        alert('Empty cant be added')
    }

}

function deleteBtn(a){
    a.parentNode.remove()
   
}

function editFn(a){
   var inputEdit = a.parentNode.firstChild
   inputEdit.disabled = false
   a.parentNode.childNodes[2].style.display = 'inline'
   a.style.display = 'none'
   inputEdit.focus()
    
}
function updateBtnFn(a){
    var l = a.parentNode
    l.childNodes[1].style.display = 'inline'
    a.style.display ='none'
    l.firstChild.disabled = true

}
function dltAll(){
 document.getElementById('itemList').innerHTML = ''
}
