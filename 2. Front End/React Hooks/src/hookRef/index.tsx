import { useEffect, useRef } from "react";
function HookRef() {
  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef2.current) inputRef2.current.focus();
  }, []);

  return (
    <>
      <div>
        <input type="text" ref={inputRef1} />
        <input type="text" ref={inputRef2} />
        <button
          onClick={() => {
            if (inputRef1.current) {
              inputRef1.current.value = "Text ini ada isinya";
              inputRef1.current?.focus();
            }
          }}
        >
          focus
        </button>
      </div>
    </>
  );
}

export default HookRef;
