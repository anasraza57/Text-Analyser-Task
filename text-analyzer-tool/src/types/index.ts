export interface ResultBarType {
  title: string
  value: number
}

export interface BottomResultBarValType {
  title: string
  value: string
}

export interface ResultBoxType {
  resultBar: ResultBarType[]
}

export interface TextAreaType {
  setResultBar: (val: any) => void
  setBottomResultBar: (val: any) => void
}

export interface BottomResultBoxType {
  bottomResultBar: BottomResultBarValType[]
}