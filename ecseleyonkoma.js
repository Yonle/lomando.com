//4コマ漫画
var pics_src = new Array("eng1.jpg","eng2.jpg","eng3.jpg","eng4.jpg");
var num = 0;
 
function go_forward(){
    if (num == 3) {
        num = 0;
    }else{
        num ++;
}
document.getElementById("mypic").src=pics_src[num];
}
 
function go_back(){
    if (num == 0) {
        num = 3;
    }else {
        num --;
    }
    document.getElementById("mypic").src=pics_src[num];
}
//キャラクターセレクト
var chara_src = new Array("echarasele1.jpg","echarasele2.jpg","echarasele3.jpg","echarasele4.jpg","echarasele5.jpg","echarasele6.jpg","echarasele7.jpg","echarasele8.jpg","echarasele9.jpg","echarasele10.jpg");
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