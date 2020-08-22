import React from "react";
import { connect } from "react-redux";
import { actionTypeA } from "./modules/counter";

function Container({ number, increase }) {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={increase}>+1</button>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        console.log("connect 내부의 첫번째인자값 state", state); //리덕스를 바라보고있음
        return { number: state };
    }, // 리덕스 상태 관련 함수
    (dispatch) => ({
        //리덕스 disaptch 관련 함수
        increase: () => {
            console.log("increase함수");
            dispatch(actionTypeA(300)); //리덕스의 값을 변화를 줄수 있음. 이런식으로 action을 실행시킬수 있음
        },
    })
)(Container);
