const arryTitle=[
    '===============================',
    '現在持っているタスク一覧',
    '==============================='
]

const arryTask=[
    "掃除",'買い物','散歩'
]

const add = function(){
    arryTitle.forEach((value)=> {
        console.log(value);
    });

    arryTask.forEach((value,index )=> {
        console.log(index+":"+value);
    });

    const input_1=prompt("「確認、追加、削除、終了のいずれかを入力してください。」");
    const input_2=prompt("タスクを入力してください。");

    if(input_2 !==''){
        input_1;
        arryTask.push(input_2);

        arryTitle.forEach((value)=> {
            console.log(value);
        });
        
        arryTask.forEach((value,index )=> {
            console.log(index+":"+value);
        });
    }
}
add();
