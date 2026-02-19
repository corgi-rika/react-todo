// /Users/admin/react-todo/src/types/todos.js

// Todoの進捗状態を表す型
// 3つの文字列のどれかしか入らないように制限している
// → 間違った文字を入れるとTypeScriptがエラーにしてくれる
export type TodoStatus = "notStarted" | "inProgress" | "done";


// Todo1件のデータの形（設計図）を定義している
// → Todoは必ずこの形で作るというルール
export type Todo = {

  // Todoを識別するための番号
  // 一位の値を入れる
  id: number;
  // Todoのタイトル
  title: string;
  // Todoの進捗状態
  // 上で定義したTodoStatus型しか入らない
  status: TodoStatus;
  // 詳細説明
  // メモや補足を書く欄
  detail: string;
  isEditing: boolean; // 編集モードかどうかを表すフラグ
};