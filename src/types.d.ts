//컴포넌트에서 자주 사용되는 타입은 types.d.ts 파일에 적어서 사용한다
//파일이름이 이런 경우 매 타입을 선언할때마다 export하고 import 해줄 필요가 없다

type Todo = {
  id: number;
  content: string;
  checked: boolean;
};

//인자로 받는 이벤트 객체에 대한 타입 선언
type InputEvt = React.ChangeEvent<HTMLInputElement>;

//updateInputVal 함수 타입앨리어스 선언
type UpdateInputVal = (evt: InputEvt) => void;

type AddTodo = (val: string) => void;

type ToggleChecking = (selectedId: number) => void;

type DeleteTodo = (selectedId: number) => void;
