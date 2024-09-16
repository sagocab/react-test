import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if(numbers.length === 0)  return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum/numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]);// 콤포넌트가 처음 랜더링 될때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        console.log(inputEl.current);
        if (inputEl.current) {
            inputEl.current.focus();
        }

    }, [list, number]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
          <div>
              <input value={number} onChange={onChange} ref={inputEl} />
              <button onClick={onInsert}>등록</button>
              <ul>
                  {list.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))}
              </ul>
              <div>
                  <b>평균값:</b>{avg}
              </div>
          </div>
        );
    };

export default Average;