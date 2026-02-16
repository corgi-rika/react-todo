import {useState} from 'react';

// Todo追加フォームコンポーネント
export const TodoForm = () => {

  // タイトル入力値を保持（inputの中身）
  // 初期値は空文字（まだ何も入力していない状態）
  const [title, setTitle] = useState("");

  // ステータス選択値を保持（selectの選択）
  const [status, setStatus] = useState("notStarted");

  // クリック時の確認用（ 今はまだ保存しないので、入力値をコンソールに表示するだけ）
  const handleClick = () => {
    console.log(title, status);
  };

  return (
    <div>
      {/* タイトル入力 */}

      {/* ▼タイトル入力欄
      valueでstateの値を表示し、
        入力が変わるたびにstateを更新している
         → Reactでは「入力値はstateが管理する」 */}
        
      <input
        type="text"
        placeholder="タイトルを入力"
        value={title} // stateの値を表示
        onChange={(e) => setTitle(e.target.value)}// 入力が変わったらstate更新
      />

      {/* ステータス選択(select) */}
      {/*valueで現在のstateを表示し、
        選択が変わったらstateを更新する
         e.target.value には選択されたoptionのvalueが入る */}
        
      <select
        value={status} // stateの値を表示
        onChange={(e) =>
        setStatus(e.target.value)}// 選択が変わったらstate更新
      >
        <option value="notStarted">未着手</option>
        <option value="inProgress">進行中</option>
        <option value="done">完了</option>
      </select>

      {/* 追加ボタン（押した時にhandleClickが動く） */}
      <button onClick={handleClick}>追加</button>

    </div>
  )
}

