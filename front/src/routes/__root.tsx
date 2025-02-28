import { createRootRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const RootComponent = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

const Route = createRootRoute({
  component: RootComponent,
});

export { Route };
