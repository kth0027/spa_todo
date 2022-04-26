import React, { useState, useEffect, useCallback } from "react";
import styles from "../Todo.module.css";
import { Todo } from "../App";
import { useSelector, useDispatch } from "react-redux";

// import { setEditingId, resetEditingId } from "../modules/todos";
import { setEditingId, resetEditingId } from "../actions/todos";
import { TodoState } from "../modules/todos";

// props 인터페이스 정의
interface Props {
    readonly todo: Todo;

    // 함수타입 추가
    readonly onRemove: (id: number) => void;
    readonly onToggle: (id: number) => void;

    // 함수 타입 추가
    readonly onEdit: (id: number, input: string) => void;
}



const TodoItem = ({ todo, onRemove, onToggle, onEdit }: Props) => {
    // return <h1>TodoItem</h1>

    // todo 객체 속성 분리 저장
    const { id, text, done } = todo;

    // 스토어 상태 조회
    const { editingId } = useSelector((state: TodoState) => ({
        editingId: state.editingId,
    }));


    // 편집 입력 요소 표시여부 상태 선언
    // const [showInput, setShowInput] = useState(false);

    //  편집사애 확인
    const showInput = (id === editingId);


    // 편집 입력값 상태 선언
    const [inputText, setInputText] = useState("");

    // createRef 함수를 통한 ref 설정
    const editInput: React.RefObject<HTMLInputElement> = React.createRef();


    const dispatch = useDispatch();

    const onSetEditingId = useCallback((id: number) => dispatch(setEditingId(id)), [dispatch]);
    const onResetEditingId = useCallback(() => dispatch(resetEditingId()), [dispatch]);




    // 더블클릭 이벤트 처리 함수
    const onDoubleClick = () => {
        console.log("onDoubleClick");

        onSetEditingId(id);

        setInputText(text);
    };


    // 변경 이벤트 처리 함수
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("onChange " + e.target.value);

        setInputText(e.target.value);
    };

    // 키 입력 이벤트 처리 함수

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          console.log("handleKeyPress Enter inputText : " + inputText);
    
          onEdit(id, inputText);
    
          onResetEditingId();
        }
      };



        // 입력 포커스가 사라지면 실행되는 함수
        const handleBlur = () => {
            console.log("handleBlur inputText : " + inputText);

            // setShowInput(false);

            // 편집 항목 ID 리셋
            onResetEditingId();
        };

        // 마운트 될 때 편집 입력 요소값 설정
        useEffect(() => {
            console.log("useEffect todo = " + todo);

            if (todo) {
                console.log("todo.text = " + todo.text);

                setInputText(todo.text);
            }
        }, [todo]);

        // 마운트 될 시 편집  입력 요소 포커스 처리
        useEffect(() => {
            if (editInput.current) {
                editInput.current.focus();
            }
        }, [editInput]);




        return (
            <div className={styles.item}>
                <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
                {showInput && (
                    <input
                        value={inputText}
                        onChange={onChange}
                        onKeyPress={handleKeyPress}
                        onBlur={handleBlur}
                        ref={editInput}
                    />
                )}
                {!showInput && <span onDoubleClick={onDoubleClick}>{text}</span>}
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        );
    };


    export default TodoItem;