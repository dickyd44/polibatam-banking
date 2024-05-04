"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} duration={5} decimal="," prefix="$" decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
