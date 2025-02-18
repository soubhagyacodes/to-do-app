import { Button } from "@/components/ui/button";
import Todos from "./components/TodoList";

export default function Home() {

  return (
    <>
      <div className="relative h-screen px-20 py-16">
        <Todos />
        <div className="absolute bottom-0 w-full text-xs flex items-center justify-center bg-red-400 p-2 left-0">
          © Soubhagya Ranjan Mishra
        </div>
      </div>
    </>
  );
}
