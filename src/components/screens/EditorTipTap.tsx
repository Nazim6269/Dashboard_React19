import { useTheme } from "@/context/theme-context";
import { Color } from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";

export const lightTheme = {
  editorBg: "bg-secondary",
  editorBorder: "border-gray-300",
  textColor: "text-black",
  buttonBg: "bg-indigo-500",
  buttonText: "text-black",
  buttonHover: "hover:bg-indigo-600",
};

export const darkTheme = {
  editorBg: "bg-gray-800",
  editorBorder: "border-gray-600",
  textColor: "text-white",
  buttonBg: "bg-indigo-400",
  buttonText: "text-black",
  buttonHover: "hover:bg-indigo-500",
};

export const EditorTipTap = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  const editor = useEditor({
    extensions: [Document, Paragraph, Text, TextStyle, Color],
    content: `
      <p><span style="color: #000">Oh, for some reason that’s purple.</span></p>
    `,
    editorProps: {
      attributes: {
        class: `w-2/3 mt-4 p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-500 ${currentTheme.editorBg} ${currentTheme.editorBorder}`,
      },
    },
  });

  if (!editor) return null;

  return (
    <div
      className={`p-4 w-full min-h-screen rounded-lg ${currentTheme.editorBg}`}
    >
      <div className="flex flex-wrap gap-2">
        <input
          type="color"
          onInput={(event) =>
            editor.chain().focus().setColor(event.target.value).run()
          }
          value={editor.getAttributes("textStyle").color}
          className="w-10 h-10 rounded-md border cursor-pointer"
        />
        {[
          { color: "#958DF1", label: "Purple" },
          { color: "#F98181", label: "Red" },
          { color: "#FBBC88", label: "Orange" },
          { color: "#FAF594", label: "Yellow" },
          { color: "#70CFF8", label: "Blue" },
          { color: "#94FADB", label: "Teal" },
          { color: "#B9F18D", label: "Green" },
        ].map(({ color, label }) => (
          <button
            key={color}
            onClick={() => editor.chain().focus().setColor(color).run()}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              editor.isActive("textStyle", { color })
                ? currentTheme.buttonBg
                : "bg-white"
            } ${currentTheme.buttonText} ${currentTheme.buttonHover}`}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => editor.chain().focus().unsetColor().run()}
          className={`px-4 py-2 text-sm font-medium rounded-md bg-white hover:bg-gray-200`}
        >
          Unset color
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};
