"use client";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/redux/features/counter/counterSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardTitle, CardDescription, CardContent } from "../card";
import { Plus, Minus, ArrowBigRight } from "lucide-react";

const Counter = () => {
  const [value, setValue] = useState("");

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow max-w-sm m-auto mt-0">
      <CardTitle className="pt-4 px-6 pb-2">Counter</CardTitle>
      <CardDescription className="px-6 pb-6">
        This is a client component using redux state
      </CardDescription>
      <CardContent className="flex flex-col">
        <div className="flex justify-center">
          {/* <span className="w-[100px] leading-10">Count:</span> */}
          <span className="h-10 w-10 leading-10 text-center border-2 rounded">
            {count}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-10 justify-evenly mt-4">
          <Button onClick={() => dispatch(decrement())}>
            <Minus />
          </Button>
          <Button onClick={() => dispatch(increment())}>
            <Plus />
          </Button>
        </div>
        <div className="flex mt-4">
          <Input
            id="amount"
            placeholder="Enter an amount to increment by"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button
            className="ml-2"
            onClick={() => {
              dispatch(incrementByAmount(Number(value)));
              setValue("");
            }}
          >
            <ArrowBigRight />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Counter;
