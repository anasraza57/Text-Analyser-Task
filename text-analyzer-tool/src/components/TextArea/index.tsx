import { ChangeEvent, useEffect, useRef, useState } from "react";
import './index.scss'
import { ResultBarType, TextAreaType } from "../../types";
import { pronouns } from "../../data/pronouns";

const TextArea = ({ setResultBar, setBottomResultBar }: TextAreaType) => {
  const [input, setInput] = useState('');
  const areaRef = useRef<HTMLTextAreaElement>(null);


  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    const words = input.trim().split(/\s+/).filter(Boolean)
    const minute = Math.ceil(words.length / 225)
    setInput(input);
    setResultBar((prevValue: ResultBarType[]) => [
        { ...prevValue[0], value: words.length },
        { ...prevValue[1], value: input.length },
        { ...prevValue[2], value: input.trim().split(/[.!?]/).filter(Boolean).length },
        { ...prevValue[3], value: input.split(/\n/).filter(para => para.trim() !== '').length },
        { ...prevValue[4], value: words.filter(word => pronouns.includes(word)).length }
      ]
    )

    setBottomResultBar((prevValue: any) => [
      { ...prevValue[0], value: '~' + minute + (minute > 1 ? ' minutes' : ' minute')},
      {
        ...prevValue[1], value: words.reduce((longWord, curr) => {
          return curr.length > longWord.length ? curr.replace(/[^a-zA-Z]/g, '') : longWord.replace(/[^a-zA-Z]/g, '')
        }, '')
      },
    ])
  }

  useEffect(() => {
    if (areaRef && areaRef?.current) {
      areaRef?.current?.focus()
    }
  }, [areaRef])

  return <textarea ref={areaRef} value={input} className="text-area" placeholder="Paste your text here..."
                   onChange={onChangeHandler} />
}

export default TextArea
