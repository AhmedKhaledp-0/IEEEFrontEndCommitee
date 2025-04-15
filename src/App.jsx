import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-zinc-50 dark:bg-zinc-900">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <h1 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50">
          Welcome IEEE
        </h1>
      </main>
    </>
  );
}

export default App;
