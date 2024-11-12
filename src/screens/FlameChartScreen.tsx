import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const expensiveCalculation = (timems: number) => {
  const initialTime = new Date().getTime();
  while (new Date().getTime() - initialTime < timems) {}
};

const functionA = () => {
  expensiveCalculation(1000);
};

const functionB = () => {
  functionA();
  functionA();
  functionA();
};

const functionC = () => {
  expensiveCalculation(3000);
};

const rootFunction = () => {
  functionA();
  functionB();
  expensiveCalculation(2000);
  functionC();
};

const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, "second");
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return rtf.format(-diffInMinutes, "minute");
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return rtf.format(-diffInHours, "hour");
  } else {
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return rtf.format(-diffInDays, "day");
  }
};

const toLocaleString = () => {
  {
    const start = new Date().getTime();
    for (let i = 0; i < 1000; i++) {
      new Intl.DateTimeFormat("en-US", {
        month: "2-digit",
        day: "2-digit",
      }).format(new Date());
    }
    console.log(
      new Date().getTime() - start,
      new Intl.DateTimeFormat("en-US", {
        month: "2-digit",
        day: "2-digit",
      }).format(new Date())
    );
  }

  {
    const start = new Date().getTime();
    const format = new Intl.DateTimeFormat("en-US");
    for (let i = 1000; i < 2000; i++) {
      format.format(i);
    }
    console.log(new Date().getTime() - start);
  }

  const start = new Date().getTime();
  for (let i = 2000; i < 3000; i++) {
    new Date().toDateString();
  }
  console.log(new Date().getTime() - start);
};

export const FlameChartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
      <Button onPress={() => toLocaleString()} title={"RUN FUNCTION"} />
    </SafeAreaView>
  );
};
