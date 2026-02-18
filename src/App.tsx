import { useState } from 'react'
import type { Todo } from './types/todos.ts'
import './App.css'
import { TodoForm } from './components/TodoForm.tsx'

function App() {

  // Todoの配列をstateで持つ
  // 型は Todo[]（Todoの配列）
  const [todos, setTodos] = useState<Todo[]>// ← TypeScriptの説明。このstateにはTodoの配列が入る
  ([
    {id:1,
      title:"React Todoを作る",
      status: "notStarted",
      detail: "まず土台"
    },
    {id:2,
      title:"一覧UIを作る",
      status: "inProgress",
      detail: "mapで表示",
    },
    {id:3,
      title:"Issueで管理する",
      status: "done",
      detail: "進捗を見える化"
    }
  ])

  const handleAddTodo = (title: string, status: Todo["status"]) =>{
    // title空なら何もしない（ガード）。trimを使うことでスペースだけの入力も弾く。
    if (title.trim() === "") return;

    // idを連番で作る（最大id+1）
    const newId = todos.length > 0 ? todos[todos.length-1].id + 1 : 1;

    // 新しいTodoを作る
    const newTodo = {
      id: newId,
      title,
      status,
      detail:""
    };

    // 配列に追加
    setTodos([...todos, newTodo]);
  };
    // Todoを削除する関数
    // 引数 id は「削除したいTodoの番号」
    const handleDeleteTodo = (id: number) => {

    // filterは「条件に合うものだけ残す」メソッド
    // todo.id !== id
    // → 押されたidと違うTodoだけ残す
    // → 同じidのTodoは配列に入らない（＝削除される）
    const newTodos = todos.filter((todo) => todo.id !== id);

  // Reactのstateを書き換える
  // todosが更新される → 画面が再描画される → Todoが消える
  setTodos(newTodos);
};


  return (
    <>

      {/* ここに書くことでTodoFormを画面に表示する */}
      {/* ✅ ここが重要：追加関数をフォームに渡す */}
      <TodoForm onAddTodo={handleAddTodo} />

      <h1>React Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>({todo.status})</span>
            <span>{todo.title}</span>

            {/* 編集ボタン（まだ機能なし） */}
            <button>編集</button>
          
            
            <button onClick={() => handleDeleteTodo(todo.id)}
            >削除</button>

            {/* ↑reactは上でこうしている　button.onclick = function () {
            handleDeleteTodo(todo.id);
            }; */}

          </li>
        ))}
      </ul>
    </>
  );
}


export default App


/*
【メモ：React開発環境の挙動】

① 保存しただけでブラウザに反映される理由
→ ViteのHot Reload（HMR）が働いているため。
ファイル保存を検知して自動ビルドし、ブラウザに差分反映する。
Railsのように手動リロードは不要。

② buttonが最初からオシャレな理由
→ ViteテンプレートにデフォルトCSS（App.css / index.css）が含まれているため。
自分で書いていなくてもスタイルが適用される。
*/