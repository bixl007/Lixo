export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-background relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/40 blur-[120px] pointer-events-none" />
      <div className="w-full max-w-[480px] mx-auto flex flex-col space-y-6 relative z-10 animate-fade-in">
        {children}
      </div>
    </div>
  );
}
