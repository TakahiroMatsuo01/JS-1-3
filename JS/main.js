const titleSet = '===============================\n現在持っているタスク一覧\n===============================';

const tasksList = [
    '掃除','買い物','散歩'
]

const add = function(){
    console.log(titleSet);

    tasksList.forEach((value,index ) => {
        console.log(index+':'+value);
    });

    const comformDialog = prompt('「確認、追加、削除、終了のいずれかを入力してください。」');
    const inputDialog=prompt('タスクを入力してください。');

    comformDialog;
    tasksList.push(inputDialog);

    titleSet;
    
    tasksList.forEach((value,index )=> {
        console.log(index+':'+value);
    });   
}

add();