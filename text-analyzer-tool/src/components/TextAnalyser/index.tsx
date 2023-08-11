import ResultBox from "../ResultBox";
import TextArea from "../TextArea";
import BottomResultBox from "../BottomResultBox";
import { useState } from "react";
import { BottomResultBarValType, ResultBarType } from "../../types";

const TextAnalyser = () => {
  const [resultBar, setResultBar] = useState<ResultBarType[]>([
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ])

  const [bottomResultBar, setBottomResultBar] = useState<BottomResultBarValType[]>([
    {
      title: 'Average Reading Time:',
      value: '-',
    },
    {
      title: 'Longest word:',
      value: '-',
    },
  ])

  return (
    <>
      <ResultBox resultBar={resultBar} />
      <TextArea setResultBar={setResultBar} setBottomResultBar={setBottomResultBar} />
      <BottomResultBox bottomResultBar={bottomResultBar} />
    </>
  )
}

export default TextAnalyser