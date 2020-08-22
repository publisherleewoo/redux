//상수
const A = "counter/A";

//액션함수
export const actionTypeA = (arg) => {
    console.log("actionTypeA실행 argmument :", arg);
    return { type: A, value: arg }; //이것 액션 객체 때문에 아래 리듀서가 실행됌.
};

//리듀서. 상태
export default function counter(state = 0, action) {
    console.log("action 실행" + action);

    switch (action.type) {
        case A:
            console.log("action에서 type A 실행");
            return action.value; //state가 1로 바뀜

        default:
            console.log("action에서 디폴트 실행");
            return state; //기본 초기값은 0. 이유는 state=0으로 설정했기때문에
    }
}
