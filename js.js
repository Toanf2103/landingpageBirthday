fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    setData(jsonData);
    console.log(jsonData); // Dữ liệu JSON đã được chuyển đổi thành JavaScript object
  })
  .catch(error => {
    console.error('Error:', error);
  });

function createRow(html){
    return `<div class="row">
                ${html}
            </div>`
}


function setData(jsonData){
    dong="chan"
    hang=4
    html=''
    arrayRow=[]
    for(let i in jsonData){
        item = jsonData[i];       
        html+=`<div class="col-12 col-lg-3 card">
            <div class="card-inner">
                <div style="background-image: url('image/${item.image}');  background-size: cover;" class="card-front">
                    
                </div>
                <div class="card-back">
                    
                    <div style="background-image: url('image/${item.image}');  background-size: cover;" class="card-front">
                        <div class="overlay">
                            <p>${item.content}</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>`
        hang--;
        if(hang==0){
            arrayRow.push(createRow(html));
            html=''
            dong=dong=="chan"?"le":"chan"
            hang=dong=="chan"?4:3
        }
        
        
        
    }
    document.getElementsByClassName("container")[0].innerHTML=arrayRow.join()
}

 