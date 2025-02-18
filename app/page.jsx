import { Button } from "@/components/ui/button";
import Todos from "./components/TodoList";

export default function Home() {

  return (
    <>
      <div className="px-20 py-16">
        <h1 className="text-6xl font-bold">Todos</h1>
        <Todos />
      </div>
    </>
  );
}
