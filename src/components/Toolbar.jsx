const Toolbar = ({ insertText }) => {
  return (
    <section className="toolbar">
      <button aria-label="Inserir título nível 1" onClick={() => insertText("# ", "")}>H1</button>
      <button aria-label="Inserir título nível 2" onClick={() => insertText("## ", "")}>H2</button>
      <button aria-label="Inserir negrito" onClick={() => insertText("**", "**")}>Bold</button>
      <button aria-label="Inserir itálico" onClick={() => insertText("*", "*")}>Italic</button>
      <button aria-label="Inserir link" onClick={() => insertText("[", "](http://)")}>Link</button>
      <button aria-label="Inserir bloco de código" onClick={() => insertText("```", "```")}>Code Block</button>
      <button aria-label="Inserir item de lista" onClick={() => insertText("- ", "")}>List Item</button>
      <button aria-label="Inserir linha horizontal" onClick={() => insertText("\n---\n", "")}>Horizontal Line</button>
    </section>
  );
};

export default Toolbar;