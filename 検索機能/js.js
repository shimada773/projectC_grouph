const output_csv = document.getElementById('order-table');

function csv_data(dataPath) {
    const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
    request.addEventListener('load', (event) => { // ロードさせ実行
        const response = event.target.responseText; // 受け取ったテキストを返す
        csv_array(response); //csv_arrayの関数を実行
    });
    request.open('GET', dataPath, true); // csvのパスを指定
    request.send();
}

function csv_array(data) {
    const dataArray = []; //配列を用意
    const dataString = data.split('\n'); //改行で分割
    for (let i = 0; i < dataString.length; i++) { //あるだけループ
        dataArray[i] = dataString[i].split(',');
    }
    let insertElement = ''; //テーブルタグに表示する用の変数
//---------------------------------------------------------------------------------
    //title

    for (let rowCount = 1; rowCount < dataArray.length; rowCount++){
        strCell = dataArray[rowCount];
        for(let c = 0; c < strCell.length; c++){
          if (c == 0){
            insertElement += "<tr class='table-row'>"
            insertElement += "<td class='foodname'><a href='" + strCell[1] + "'>" + strCell[c] + "</a></td>";
          }
         
          else if(c == 1){
          }
          else if(c == 2){

            insertElement += "<td class='foodimg'><img src='" + strCell[c] + "' /></td>";
          }
          else if(c == 3){
            insertElement += "<td class='foodkcal'>" + strCell[c] + "</td>";
            
          }
          else if(c == strCell.length - 1){
            insertElement += "<td class='fooditem'>" + strCell[c] + "</td>";
            insertElement += "</tr>";
          }
          else{
            insertElement += "<td class='fooditem'>" + strCell[c] + "</td>";
          }
        }
}
    output_csv.innerHTML = insertElement; // 表示
}

csv_data('https://raw.githubusercontent.com/shimada773/test.github.io/main/%E6%96%99%E7%90%86%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF%E3%83%98%E3%82%99%E3%83%BC%E3%82%B9.csv'); // csvのパス




window.addEventListener( "DOMContentLoaded", function(){

  /*---- HTML 要素 ----*/
  const search = document.forms[ 0 ].search;
  const table = document.querySelector( "table" );

  
  /*---- 該当なし表示用 ----*/
  const nohit = table.parentNode.insertBefore(
  document.createElement( "p" ), table.nextNode
  );
  nohit.textContent = "該当する項目は有りません";
  nohit.style.display = 'none';
  
  /*---- 入力時に実行 ----*/
  search.oninput = function(){
  
  //----] キーワード取得
  const key = search.value.
  replace( /([\\\*\+\.\?\{\}\(\)\[\]\^\$\-\|\/])/g, "\\$1" );

  if(!isNaN(key)){
    check4(50, 50);
  }else {

  
  
  //----] テーブル内を検索
  let hit = 0;
  [].forEach.call( table.rows, function( row, index ){

  row.style.display = [].some.call( row.cells, function( cell ){
  return ( new RegExp( key ) ).test( cell.textContent );
  } ) ? "table-row": "none" ;
  
  row.style.display=="table-row" ? hit++ : hit ;
  } );
  
  //----] 該当なし表示
  nohit.style.display = hit ? "none" : "block" ;
  }
  }
  
  }, false );

  function check(){
    var num = document.getElementById('search').value;
    var text = document.getElementById('order-table');
    // var table = document.getElementById('table-row');
    // var table2 = document.getElementById('kcal-table');
    var row = text.rows.length;
    // text.style.display="table-row";
        
    for(let i=0; i<row; i++){
      var value = text.rows[i].cells[2].innerText;
      var str = '30';
      var result = value.replace("kcal", "");
      // var wstr = value;
      // wresult = wstr.split("kcal");
      // var math = wresult[0];
  
      num1 = parseInt(num)
      num2 = parseInt(str)
      
      var min = num;
      var max = num1 + num2;
      
      if(!isNaN(num)){
        if(num.length == 3){
          if(result >= min && result < max && result.length == 3){
            text.rows[i].style.display="table-row"; //表示
            console.log(result);
          }else { 
            text.rows[i].style.display="none";
            // console.log(num.length);
          }
        }else if(num.length == 2 ){
          if(result >= min && result < max ){
            text.rows[i].style.display="table-row"; //表示
            console.log(result);
          }else{
            text.rows[i].style.display="none"; //非表示
          }
        }                 
      } else {
        text.style.display="table-row";
      }    
    }  
  }
  
  
  var check2 = function(){ 
    var num = document.getElementById('search').value;
    var text = document.getElementById('order-table');
    // var table = document.getElementById('table-row');
    var row = text.rows.length;
    // check2.click();
        
    for(let j=0; j<row; j++){
      var value = text.rows[j].cells[2].innerText;
      var str = '30';
      var result = value.replace("kcal", "");
      // var wstr = value;
      // wresult = wstr.split("kcal");
      // var math = wresult[0];
  
      num1 = parseInt(num)
      num2 = parseInt(str)
    
      var max = num;
      var min = num1 - num2;
      
      if(!isNaN(num)){
        if(num.length == 3){
          if(result >= min && result < max){
            text.rows[j].style.display="table-row"; //表示
            console.log(result);
          }else { 
            text.rows[j].style.display="none";
            // console.log(num.length);
          }
        }else if(num.length == 2){
          if(result >= min && result < max && result.length == 2){
            text.rows[j].style.display="table-row"; //表示
            console.log(result);
          }else{
            text.rows[j].style.display="none"; //非表示
          }
        }                 
      } else {
        text.style.display="table-row";
      }    
    }  
  }
  
  
  function check4(numMin, numMax){
    var targetTable = document.getElementById('order-table');
    var nkey = document.getElementById('search').value;
    tblRow = targetTable.rows.length;
    
    var jj;
  
    if(!isNaN(nkey)){
      for(let j=0; j<tblRow - 1; j++){
        jj=j;
        var num = parseInt( nkey );
        var max = num + numMax;
        var min = num - numMin;
  
        var kcalString = targetTable.rows[j].cells[2].innerText;
        var kcalInt = parseInt(kcalString.replace('kcal', ''));
    
  
        if(min <= kcalInt && max >= kcalInt){   
          targetTable.rows[j].style.display="table-row";

        }else{
            targetTable.rows[j].style.display="none";
        }
      }
  
    }
  }