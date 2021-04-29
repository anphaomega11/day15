function taovonglap(number1){
    
    var a = [];
    for( var i = 0; i<=number1; i++){
        a.push(i);
    }
    return a;
}

function add(){
    
    var tong = 0;
    for(var i=0;i<=document.getElementById("number").value;i++){
        tong+=i;
    }
    document.getElementById("so").innerHTML=tong;

}


function revere(){
    var arr = taovonglap(document.getElementById("number").value)
    // var n = document.getElementById("number").value;
    // var a = [];
    // for( var i = 0; i<=n; i++){
    //     a.push(i);
    // }
    document.getElementById("timso").innerHTML=arr.reverse();
    // a.sort(function(a, b){return b-a});
    // document.getElementById("daoso").innerHTML = a;
}

function find(){
    var n = document.getElementById("number").value;
    var a = [];
    var k = +document.getElementById("current").value;
    for( var i = 0; i<=n; i++){
        a.push(i);
    }
    function checktpt(pt){
       return  pt == k;
    }
    var last = a[a.length-1];
    if (k>last || k<0) {
        document.getElementById("hienthi").innerText="Khong nam trong chuoi";
    } else {
        
        document.getElementById("hienthi").innerHTML=a.findIndex(checktpt);
    }    
}

// function swap(){
//     var n = document.getElementById("number").value;
//     var a = [];
//     var b = document.getElementById("new").value;
//     for( var i = 0; i<=n; i++){
//         a.push(i);
//     }
    
//     document.getElementById("daoso1").innerHTML = a;
      
// }

function swap(){
    var newValue = document.getElementById("newValue").value;
    var number = document.getElementById("number").value;
    var arr = [];
    for(var i = 0; i <= number; i++)	{
            arr.push(i);
        }
    var x = arr[1];
    // Array.prototype.Swap = function (array,a,b) {  
    //     var temp = array[a];  
    //     array[a] = array[b];  
    //     array[b] = temp;  
    //     return this; // trả về giá trị hoán đổi
    // } 
    // Swap(arr,x,newValue)
    // alert(testString.substring(2));
    var swapArrayElements = function (a, x, y) { //mảng a, swap x với y
        if (a.length === 1) return a; 
        //a.splice(2,0,"a","b") trong mảng a tại vị trí thứ 2: 0 xóa phần tử nào và thêm a,b vào
        a.splice(y, 1, a.splice(x, 1, a[y])[0]); //splice bên trong : TẠI VỊ TRÍ X xóa 1 phần tử và thêm vào một phần tử mới = phần tử ở vị trí y trong mảng a
        // splice ngoài : TẠI VỊ TRÍ Y xóa 1 và thêm vao phần tử mới
        return a;
    };
    swapArrayElements(arr, x, newValue);
    document.getElementById("swap_result").innerHTML=arr;
}

