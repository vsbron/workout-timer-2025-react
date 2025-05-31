function Button({ children }: { children: string }) {
  // Returned JSX
  return (
    <button className="bg-stone-300 px-5 py-2.5 font-medium uppercase cursor-pointer border-b-2 active:border-b-1">
      {children}
    </button>
  );
}

export default Button;
