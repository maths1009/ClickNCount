import { createRootRoute } from "@tanstack/react-router";
import { Button, Progress, Switch } from "@/components";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { client } from "@/api";
import { toast } from "sonner";

const socket = io("http://localhost:3001");

const RootComponent = () => {
  const [numberClicks, setNumberClicks] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoClickEnabled, setIsAutoClickEnabled] = useState(false);

  const onSocketClick = (isAuto: boolean) => {
    socket.emit("click", { isAuto }, (data: { status: "ok" | "error" }) => {
      if (data.status === "ok") {
        setNumberClicks((prev) => prev + 1);
      } else {
        toast.error(`Failed to click ${isAuto ? "auto" : ""}`);
      }
    });
  };

  useEffect(() => {
    const fetchClicks = async () => {
      try {
        const { data } = await client.GET("/clicks");
        setNumberClicks(data?.length ?? 0);
      } catch (error) {
        toast.error("Failed to fetch clicks");
      } finally {
        setProgress(100);
      }
    };

    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 90 ? prevProgress : prevProgress + 10
      );
    }, Math.random() * 1000);

    fetchClicks().finally(() => clearInterval(interval));
  }, []);

  useEffect(() => {
    let autoClickInterval: NodeJS.Timeout;
    if (isAutoClickEnabled) {
      autoClickInterval = setInterval(() => {
        onSocketClick(true);
      }, 1000);
    }
    return () => clearInterval(autoClickInterval);
  }, [isAutoClickEnabled]);

  if (progress < 100) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Progress value={progress} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold mb-4">
        Total Clicks: {numberClicks}
      </div>
      <Button onClick={() => onSocketClick(false)}>Click me</Button>
      <div className="mt-4">
        <Switch
          checked={isAutoClickEnabled}
          onCheckedChange={(checked) => {
            toast.info(`Auto Click ${checked ? "enabled" : "disabled"}`);
            setIsAutoClickEnabled(checked);
          }}
        />
        <span className="ml-2">Auto Click</span>
      </div>
    </div>
  );
};

const Route = createRootRoute({
  component: RootComponent,
});

export { Route };
