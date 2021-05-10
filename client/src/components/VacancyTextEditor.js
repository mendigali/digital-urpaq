import React, {useState} from 'react';
import { Editor, HtmlEditor, Toolbar } from '@aeaton/react-prosemirror'
import { plugins, schema, toolbar } from '@aeaton/react-prosemirror-config-default'

const initialValue = '<p></p>'

export default function VacancyTextEditor() {
  const [value, setValue] = useState(initialValue)

  return (
    <HtmlEditor
      schema={schema}
      plugins={plugins}
      value={initialValue}
      handleChange={setValue}
      debounce={250}
    >
      <Toolbar toolbar={toolbar} />
      <Editor autoFocus />
    </HtmlEditor>
  )
}