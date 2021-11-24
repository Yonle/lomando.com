//4コマ漫画
var pics_src = new Array("4koma1.jpg","4koma2.jpg","4koma3.jpg","4koma4.jpg","eng1.jpg","eng2.jpg","eng3.jpg","eng4.jpg");
var num = 0;
 
function go_forward(){
    if (num == 7) {
        num = 0;
    }else{
        num ++;
}
document.getElementById("mypic").src=pics_src[num];
}
 
function go_eng(){
    num = 4;
    document.getElementById("mypic").src=pics_src[num];
}

function go_back(){
    if (num == 0) {
        num = 7;
    }else {
        num --;
    }
    document.getElementById("mypic").src=pics_src[num];
}
//キャラクターセレクト
var chara_src = new Array("charasele1.jpg","charasele2.jpg","charasele3.jpg","charasele4.jpg","charasele5.jpg","charasele6.jpg","charasele7.jpg","charasele8.jpg","charasele9.jpg","charasele10.jpg");
            var point = 0;
 
            function go_tsugi(){
                switch (point) {
                  case 0:
                    point ++;
                    break;
                  case 1:
                    point ++;
                    break;
                  case 2:
                    point ++;
                    break;
                  case 3:
                    point ++;
                    break;
                  case 4:
                    point ++;
                    break;
                  case 5:
                    point ++;
                    break;
                  case 6:
                    point ++;
                    break;
                  case 7:
                    point ++;
                    break;
                  case 8:
                    document.getElementById("sound").load();
                    document.getElementById("sound").play();
                    point ++;
                    break;
                  case 9:
                    point = 0;
                    break;
                  default:
                }
                document.getElementById("charasele").src=chara_src[point];
            }

            function go_mae(){
                switch (point) {
                  case 0:
                    document.getElementById("sound").load();
                    document.getElementById("sound").play();
                    point = 9;
                    break;
                  case 1:
                    point --;
                    break;
                  case 2:
                    point --;
                    break;
                  case 3:
                    point --;
                    break;
                  case 4:
                    point --;
                    break;
                  case 5:
                    point --;
                    break;
                  case 6:
                    point --;
                    break;
                  case 7:
                    point --;
                    break;
                  case 8:
                    point --;
                    break;
                  case 9:
                    point --;
                    break;
                  default:
                }
                document.getElementById("charasele").src=chara_src[point];
            }