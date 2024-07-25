export default function Layout({ children }) {
  return (
    <div className="mx-auto bg-zinc-800 min-h-screen flex">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
    </div>
  );
}
