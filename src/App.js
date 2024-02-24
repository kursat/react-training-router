import { Button, Input } from '@nextui-org/react';
import { useRef, useState } from 'react';

function App() {
    const [renderDiv, setRenderDiv] = useState(true);

    const [renderCount, setRenderCount] = useState(0);
    const clickCount = useRef(0);
    const inputRef = useRef();

    const onClickButton = () => {
        setRenderDiv(!renderDiv);

        console.log('inputRef', inputRef);
        inputRef.current.focus();
        console.log('inputRef.current.value', inputRef.current.value);

        setRenderCount(renderCount + 1);
    };

    const onClickDiv = () => {
        clickCount.current++;
    };

    console.log('renderCount', renderCount);
    console.log('clickCount', clickCount);

    return (
        <div className="App">
            {renderDiv && (
                <div onClick={onClickDiv} className="w-40 h-40 bg-blue-200">
                    Click here!
                </div>
            )}
            <Button
                onClick={onClickButton}
                variant={'shadow'}
                color={'secondary'}
            >
                Render
            </Button>
            <Input baseRef={inputRef} />
            {/*<input className={'border-1 h-12'} ref={inputRef} />*/}
        </div>
    );
}

export default App;
