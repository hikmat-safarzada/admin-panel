import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'

function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    description: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) return null

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-3 border-b">

        <button type="button" onClick={() => editor.chain().focus().setParagraph().run()}>
          P
        </button>

        {[1, 2, 3].map((level) => (
          <button
            type="button"
            key={level}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          >
            H{level}
          </button>
        ))}

        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
          <b>B</b>
        </button>

        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
          <i>I</i>
        </button>

        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <u>U</u>
        </button>

        <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()}>
          Left
        </button>

        <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()}>
          Center
        </button>

        <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()}>
          Right
        </button>

        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          UL
        </button>

        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          OL
        </button>

        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Enter URL')
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
        >
          Link
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        >
          Clear
        </button>

      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="min-h-[250px] p-4 [&_.tiptap]:outline-none [&_.tiptap]:min-h-[220px]"
      />

    </div>
  )
}

export default RichTextEditor