import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import type { Todo } from './types/todos.ts'
import './App.css'

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

  return (
    <>
     <h1>React Todo</h1>
    </>
  )
}

export default App
