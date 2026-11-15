import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { useEffect } from 'react'
import {
  Bold, Italic, Underline as UnderlineIcon,
  Heading1, Heading2, Heading3,
  AlignLeft, AlignCenter, AlignRight,
  List, ListOrdered, Link as LinkIcon, Eraser
} from 'lucide-react'

function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline,
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '')
    }
  }, [value, editor])

  if (!editor) return null

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
  
      <div className="flex items-center gap-1 p-2 border-b bg-gray-50/50 text-gray-600 overflow-x-auto whitespace-nowrap">

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('bold') ? 'bg-gray-200 text-black' : ''}`}
          title="Bold"
        >
          <Bold size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('italic') ? 'bg-gray-200 text-black' : ''}`}
          title="Italic"
        >
          <Italic size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('underline') ? 'bg-gray-200 text-black' : ''}`}
          title="Underline"
        >
          <UnderlineIcon size={16} />
        </button>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 text-xs font-semibold rounded hover:bg-gray-200 transition ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-black' : ''}`}
        >
          <Heading1/>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 text-xs font-semibold rounded hover:bg-gray-200 transition ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-black' : ''}`}
        >
          <Heading2/>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-2 py-1 text-xs font-semibold rounded hover:bg-gray-200 transition ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-black' : ''}`}
        >
          <Heading3/>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`w-8 h-8 rounded hover:bg-gray-200 transition font-semibold text-sm ${editor.isActive('paragraph') ? 'bg-gray-200 text-black' : ''
            }`}
          title="Paragraph"
        >
          P
        </button>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-black' : ''}`}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-black' : ''}`}
          title="Align Center"
        >
          <AlignCenter size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-black' : ''}`}
          title="Align Right"
        >
          <AlignRight size={16} />
        </button>

        <div className="w-[1px] h-5 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('bulletList') ? 'bg-gray-200 text-black' : ''}`}
          title="Bullet List"
        >
          <List size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('orderedList') ? 'bg-gray-200 text-black' : ''}`}
          title="Ordered List"
        >
          <ListOrdered size={16} />
        </button>

        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Enter URL')
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
          className="p-2 rounded hover:bg-gray-200 transition"
          title="Insert Link"
        >
          <LinkIcon size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          className="p-2 rounded hover:bg-gray-200 transition text-gray-500 ml-auto shrink-0"
          title="Clear Formatting"
        >
          <Eraser size={17} />
        </button>

      </div>

      
      <EditorContent
        editor={editor}
        className="
    min-h-[200px] p-4 text-sm text-gray-700
    [&_.tiptap]:outline-none
    [&_.tiptap]:min-h-[180px]
    [&_.tiptap_h1]:text-3xl
    [&_.tiptap_h1]:font-bold
    [&_.tiptap_h2]:text-2xl
    [&_.tiptap_h2]:font-bold
    [&_.tiptap_h3]:text-xl
    [&_.tiptap_h3]:font-semibold
  "
      />
    </div>
  )
}

export default RichTextEditor