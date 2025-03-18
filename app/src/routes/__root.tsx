import { createRootRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const RootComponent = () => {
  return (
    <div>
      <Button
        onClick={() => {
          socket.emit(
            "click",
            { isAuto: false },
            (data: { status: string }) => {
              console.log(data);
            }
          );
        }}
      >
        Click me
      </Button>
    </div>
  );
};

const Route = createRootRoute({
  component: RootComponent,
});

export { Route };
