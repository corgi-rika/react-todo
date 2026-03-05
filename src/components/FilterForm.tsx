import type { Todo } from "../types/todos"; 
// ↑ Todo型を使うために読み込む（実行時には消える）

type Props = {
// ↑ 子が親から受け取る“props”の型を決める（Railsのlocalsみたいなもの）

  filterId: string;
  // ↑ ID絞り込みの入力欄の値（inputは文字列なのでstring）

  setFilterId: (value: string) => void;
  // ↑ 親のfilterIdを更新する関数（親のuseStateのset関数）

  filterStatus: Todo["status"] | "all";
  // ↑ status絞り込みの値（allは「絞り込みなし」用の特別値）

  setFilterStatus: (value: Todo["status"] | "all") => void;
  // ↑ 親のfilterStatusを更新する関数

  onReset: () => void;
  // ↑ リセットボタンを押したときに呼ぶ関数（親が用意する）
};

export const FilterForm = ({
// ↑ propsを受け取る（Rails partialなら locals を受け取るイメージ）
  filterId,
  setFilterId,
  filterStatus,
  setFilterStatus,
  onReset,
}: Props) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {/* ↑ 絞り込みUIをまとめる箱 */}

      <label style={{ marginRight: 8 }}>
        {/* ↑ ラベル（見た目用） */}
        ID：
        <input
          value={filterId}
          // ↑ 親のstateの値をそのまま表示する（これが“同期”）
          onChange={(e) => setFilterId(e.target.value)}
          // ↑ 入力が変わったら親のstateを更新する
          // → 親のstateが変わる
          // → Reactが再描画する
          // → 表示が変わる（絞り込みが効く）
          placeholder="例: 2"
          style={{ width: 120 }}
        />
      </label>

      <label style={{ marginRight: 8 }}>
        ステータス：
        <select
          value={filterStatus}
          // ↑ 親のstateの値を表示（all / notStarted / inProgress / done）
          onChange={(e) =>
            setFilterStatus(e.target.value as Todo["status"] | "all")
          }
          // ↑ selectは必ずstringで返るので、型を合わせるためにasで変換
        >
          <option value="all">すべて</option>
          {/* ↑ all = 絞り込みしない */}
          <option value="notStarted">未着手</option>
          <option value="inProgress">進行中</option>
          <option value="done">完了</option>
        </select>
      </label>

      <button onClick={onReset}>
        {/* ↑ 親から渡されたリセット関数を呼ぶ */}
        リセット
      </button>
    </div>
  );
};