const arry_title=[
    '===============================',
    '現在持っているタスク一覧',
    '==============================='
]

const arry_task=[
    "掃除",'買い物','散歩'
]

const add = function(){
    arry_title.forEach((value)=> {
        console.log(value);
    });

    arry_task.forEach((value,index )=> {
        console.log(index+":"+value);
    });
git
    const input_1=prompt("「確認、追加、削除、終了のいずれかを入力してください。」");
    const input_2=prompt("タスクを入力してください。");

   
    if(input_2 !==''){
        input_1;
        arry_task.push(input_2);

        arry_title.forEach((value)=> {
            console.log(value);
        });
        
        arry_task.forEach((value,index )=> {
            console.log(index+":"+value);
        });
    }
}
add();
