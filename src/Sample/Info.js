import React, {useReducer} from 'react';
import useInputs from "./useInput";

const Info = () => {
    const [state, dispatch] = useInputs(
        {
            name: '',
            nickname: ''
        });
    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : {name}</b>
                </div>
                <div>
                    <b>닉네임: {nickname}</b>
                </div>
            </div>
        </div>
    )
}
 export default Info;